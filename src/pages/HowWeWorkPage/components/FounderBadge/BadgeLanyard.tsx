import { BallCollider, CuboidCollider, RigidBody } from "@react-three/rapier";
import type { BadgeTextures } from "./badgeArt";
import BadgeCard from "./BadgeCard";
import { CARD_SIZE } from "./badgeGeometry";
import LanyardStrap from "./LanyardStrap";
import { useBadgeLanyard } from "./useBadgeLanyard";

type BadgeLanyardProps = {
  textures: BadgeTextures;
  /** Called once the lanyard has mounted, which only happens after the physics engine has loaded. */
  onReady: () => void;
};

/** The rope hangs from above the canvas, so the straps enter from the top edge. */
const ANCHOR_POSITION: [number, number, number] = [0, 4, 0];

/**
 * The joints and card start out to the side, so the badge swings into place when the page loads.
 * Damping settles it quickly instead of leaving it swaying.
 */
const SEGMENT_PROPS = {
  canSleep: true,
  colliders: false,
  angularDamping: 4,
  linearDamping: 4,
} as const;

const JOINT_RADIUS = 0.1;
const CARD_COLLIDER: [number, number, number] = [CARD_SIZE[0] / 2, CARD_SIZE[1] / 2, 0.01];

const BadgeLanyard = ({ textures, onReady }: BadgeLanyardProps) => {
  const { refs, isDragging, resolution, handlers } = useBadgeLanyard({ onReady });

  return (
    <>
      <group position={ANCHOR_POSITION}>
        <RigidBody ref={refs.fixed} {...SEGMENT_PROPS} type="fixed" />
        <RigidBody ref={refs.j1} position={[0.5, 0, 0]} {...SEGMENT_PROPS} type="dynamic">
          <BallCollider args={[JOINT_RADIUS]} />
        </RigidBody>
        <RigidBody ref={refs.j2} position={[1, 0, 0]} {...SEGMENT_PROPS} type="dynamic">
          <BallCollider args={[JOINT_RADIUS]} />
        </RigidBody>
        <RigidBody ref={refs.j3} position={[1.5, 0, 0]} {...SEGMENT_PROPS} type="dynamic">
          <BallCollider args={[JOINT_RADIUS]} />
        </RigidBody>
        <RigidBody
          ref={refs.card}
          position={[2, 0, 0]}
          {...SEGMENT_PROPS}
          type={isDragging ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={CARD_COLLIDER} />
          <BadgeCard ref={refs.cardVisual} textures={textures} {...handlers} />
        </RigidBody>
      </group>
      <LanyardStrap ref={refs.leftStrap} texture={textures.band} resolution={resolution} />
      <LanyardStrap ref={refs.rightStrap} texture={textures.band} resolution={resolution} />
    </>
  );
};

export default BadgeLanyard;
