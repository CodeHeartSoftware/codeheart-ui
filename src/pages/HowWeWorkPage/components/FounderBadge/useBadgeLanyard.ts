import { type ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { type RapierRigidBody, useRopeJoint, useSphericalJoint } from "@react-three/rapier";
import type { MeshLineGeometry } from "meshline";
import { useEffect, useRef, useState } from "react";
import { CatmullRomCurve3, type Group, type Mesh, Vector3 } from "three";
import { wrapAngle, yawOf } from "@/utils/angles";
import { isClick, type PointerPress } from "@/utils/pointerClick";

type Point = [number, number, number];

/** Rapier hands back plain {x, y, z} objects; this is all the hook needs from them. */
type Translation = { x: number; y: number; z: number };

/** Exposes the pointer-capture methods R3F adds to its event target. */
type PointerCaptureTarget = {
  setPointerCapture: (pointerId: number) => void;
  releasePointerCapture: (pointerId: number) => void;
};

const ORIGIN: Point = [0, 0, 0];
const ROPE_SEGMENT_LENGTH = 1;

/** Where the last rope joint attaches on the card: above its top edge, at the clip. */
const CARD_HANG_POINT: Point = [0, 1.45, 0];

/** Points sampled along the strap's curve each frame. */
const BAND_POINTS = 32;

/**
 * The lanyard is drawn as two straps, like a necklace: they meet at the clip and spread sideways as
 * they rise, this far apart (each side) at the anchor. The physics is still a single rope between them.
 */
const NECKLACE_SPREAD = 0.8;

/** How quickly the smoothed joints catch up, slower when close and faster when the card is pulled hard. */
const MIN_CATCH_UP_SPEED = 10;
const MAX_CATCH_UP_SPEED = 50;

/** How strongly the card is steered toward the side it should show (per radian off, per frame). */
const FACING_STRENGTH = 0.125;

/** After a click flips the card to its back, it turns itself back to the portrait after this long. */
const BACK_HOLD_MS = 5000;

type Facing = "front" | "back";

const FACING_YAW: Record<Facing, number> = {
  front: 0,
  back: Math.PI,
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/**
 * Keeps (or stops keeping) pointer events on the card while it's dragged, even once the pointer slips
 * off it. Best effort: the browser throws for a pointer it no longer tracks, and the drag works without it.
 */
const capturePointer = (event: ThreeEvent<PointerEvent>, method: keyof PointerCaptureTarget) => {
  try {
    (event.target as unknown as PointerCaptureTarget)[method](event.pointerId);
  } catch {
    // The pointer is already gone; there's nothing to capture or release.
  }
};

interface UseBadgeLanyardParams {
  onReady: () => void;
}

/**
 * Physics, dragging, and flipping for the badge: a fixed anchor, three rope joints, and the card on a
 * spherical joint, with the strap drawn as a curve through them. Dragging switches the card to a
 * kinematic body that follows the pointer; a click instead flips it to show the other side.
 */
export function useBadgeLanyard({ onReady }: UseBadgeLanyardParams) {
  const leftStrap = useRef<Mesh<MeshLineGeometry>>(null);
  const rightStrap = useRef<Mesh<MeshLineGeometry>>(null);
  // Rapier's joint hooks take non-null refs; the bodies attach on mount, and useFrame checks them anyway.
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<RapierRigidBody>(null!);
  const j2 = useRef<RapierRigidBody>(null!);
  const j3 = useRef<RapierRigidBody>(null!);
  const card = useRef<RapierRigidBody>(null!);
  /** The card's drawn object, which follows the card body at interpolated positions. */
  const cardVisual = useRef<Group>(null);

  const [curve] = useState(() => {
    const strap = new CatmullRomCurve3([new Vector3(), new Vector3(), new Vector3(), new Vector3()]);
    strap.curveType = "chordal";
    return strap;
  });
  const [scratch] = useState(() => ({
    pointer: new Vector3(),
    direction: new Vector3(),
    target: new Vector3(),
    smoothedJ1: new Vector3(),
    smoothedJ2: new Vector3(),
    isSmoothingStarted: false,
    leftPoints: Array.from({ length: BAND_POINTS + 1 }, () => new Vector3()),
    rightPoints: Array.from({ length: BAND_POINTS + 1 }, () => new Vector3()),
  }));
  const [dragOffset, setDragOffset] = useState<Vector3 | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  // Read every frame and changed by clicks, so refs rather than state: neither needs a re-render.
  const facing = useRef<Facing>("front");
  const press = useRef<PointerPress | null>(null);
  const returnTimer = useRef<number | undefined>(undefined);
  const { width, height } = useThree((state) => state.size);

  useRopeJoint(fixed, j1, [ORIGIN, ORIGIN, ROPE_SEGMENT_LENGTH]);
  useRopeJoint(j1, j2, [ORIGIN, ORIGIN, ROPE_SEGMENT_LENGTH]);
  useRopeJoint(j2, j3, [ORIGIN, ORIGIN, ROPE_SEGMENT_LENGTH]);
  useSphericalJoint(j3, card, [ORIGIN, CARD_HANG_POINT]);

  useEffect(() => {
    onReady();
  }, [onReady]);

  useEffect(() => () => window.clearTimeout(returnTimer.current), []);

  useEffect(() => {
    if (!isHovered) return;
    document.body.style.cursor = dragOffset ? "grabbing" : "grab";
    return () => {
      document.body.style.cursor = "";
    };
  }, [isHovered, dragOffset]);

  /** Eases `smoothed` toward `target`, which keeps a hard pull on the card from making the strap jitter. */
  const catchUp = (smoothed: Vector3, target: Translation, delta: number) => {
    scratch.target.copy(target);
    const distance = clamp(smoothed.distanceTo(scratch.target), 0.1, 1);
    smoothed.lerp(scratch.target, delta * (MIN_CATCH_UP_SPEED + distance * (MAX_CATCH_UP_SPEED - MIN_CATCH_UP_SPEED)));
  };

  useFrame((state, delta) => {
    const bodies = [fixed.current, j1.current, j2.current, j3.current, card.current];
    const [anchor, first, second, third, badge] = bodies;
    if (!anchor || !first || !second || !third || !badge || !cardVisual.current) return;
    if (!leftStrap.current || !rightStrap.current) return;

    if (dragOffset) {
      // Project the pointer into the scene at the card's depth, and move the card there.
      scratch.pointer.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      scratch.direction.copy(scratch.pointer).sub(state.camera.position).normalize();
      scratch.pointer.add(scratch.direction.multiplyScalar(state.camera.position.length()));
      bodies.forEach((body) => body?.wakeUp());
      badge.setNextKinematicTranslation({
        x: scratch.pointer.x - dragOffset.x,
        y: scratch.pointer.y - dragOffset.y,
        z: scratch.pointer.z - dragOffset.z,
      });
    }

    if (!scratch.isSmoothingStarted) {
      scratch.smoothedJ1.copy(first.translation());
      scratch.smoothedJ2.copy(second.translation());
      scratch.isSmoothingStarted = true;
    }
    catchUp(scratch.smoothedJ1, first.translation(), delta);
    catchUp(scratch.smoothedJ2, second.translation(), delta);

    // End the strap at the clip as drawn this frame. The card is drawn at interpolated physics positions,
    // so the raw joint position can sit a step behind, and the strap's end would flicker against the clip.
    cardVisual.current.updateWorldMatrix(true, false);
    cardVisual.current.localToWorld(curve.points[0].fromArray(CARD_HANG_POINT));
    curve.points[1].copy(scratch.smoothedJ2);
    curve.points[2].copy(scratch.smoothedJ1);
    curve.points[3].copy(anchor.translation());
    // Sampled from the clip (t = 0) up to the anchor (t = 1); each strap leans further out the higher it goes.
    curve.getPoints(BAND_POINTS).forEach((point, index) => {
      const spread = (index / BAND_POINTS) * NECKLACE_SPREAD;
      scratch.leftPoints[index].copy(point).setX(point.x - spread);
      scratch.rightPoints[index].copy(point).setX(point.x + spread);
    });
    leftStrap.current.geometry.setPoints(scratch.leftPoints);
    rightStrap.current.geometry.setPoints(scratch.rightPoints);

    // Nudge the card's spin, the short way around, so it settles showing the side it should.
    const spin = badge.angvel();
    const yawError = wrapAngle(yawOf(badge.rotation()) - FACING_YAW[facing.current]);
    badge.setAngvel({ x: spin.x, y: spin.y - yawError * FACING_STRENGTH, z: spin.z }, true);
  });

  /** Turns the card to its other side; from the back, it turns itself to the front again after a while. */
  const flip = () => {
    facing.current = facing.current === "front" ? "back" : "front";
    card.current?.wakeUp();
    window.clearTimeout(returnTimer.current);
    if (facing.current === "back") {
      returnTimer.current = window.setTimeout(() => {
        facing.current = "front";
        card.current?.wakeUp();
      }, BACK_HOLD_MS);
    }
  };

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    const badge = card.current;
    if (!badge) return;
    press.current = { x: event.clientX, y: event.clientY, time: event.timeStamp };
    setDragOffset(new Vector3().copy(event.point).sub(scratch.target.copy(badge.translation())));
    capturePointer(event, "setPointerCapture");
  };

  const handlePointerUp = (event: ThreeEvent<PointerEvent>) => {
    setDragOffset(null);
    capturePointer(event, "releasePointerCapture");
    const release = { x: event.clientX, y: event.clientY, time: event.timeStamp };
    if (press.current && isClick(press.current, release)) flip();
    press.current = null;
  };

  const handlePointerOver = () => setIsHovered(true);

  const handlePointerOut = () => setIsHovered(false);

  return {
    refs: { leftStrap, rightStrap, fixed, j1, j2, j3, card, cardVisual },
    isDragging: dragOffset !== null,
    resolution: [width, height] as [number, number],
    handlers: {
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerOver: handlePointerOver,
      onPointerOut: handlePointerOut,
    },
  };
}
