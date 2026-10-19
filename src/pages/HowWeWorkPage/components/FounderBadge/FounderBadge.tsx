import { Environment, Lightformer } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { HowWeWorkStrings } from "@/constants/strings";
import { cx } from "@/utils/classNames";
import BadgeLoader from "../BadgeLoader/BadgeLoader";
import BadgeLanyard from "./BadgeLanyard";
import { useFounderBadge } from "./useFounderBadge";
import styles from "./FounderBadge.module.css";

extend({ MeshLineGeometry, MeshLineMaterial });

type FounderBadgeProps = {
  /** Positions the badge within the hero. */
  className?: string;
};

type Vec3 = [number, number, number];

type StudioLight = {
  id: string;
  intensity: number;
  position: Vec3;
  rotation: Vec3;
  scale: Vec3;
};

const CAMERA: { position: Vec3; fov: number } = { position: [0, 0, 10], fov: 25 };
const DEVICE_PIXEL_RATIO: [number, number] = [1, 2];
const GRAVITY: Vec3 = [0, -40, 0];
const PHYSICS_STEP = 1 / 60;

/**
 * Steps the physics (and moves the card) before the lanyard's own frame callback runs, so the strap is
 * computed from this frame's card position. Negative priorities run early without taking over rendering.
 */
const PHYSICS_PRIORITY = -50;

/** Long, thin studio lights that streak across the badge's clear coat; there's no background image. */
const STUDIO_LIGHTS: StudioLight[] = [
  { id: "front", intensity: 2, position: [0, -1, 5], rotation: [0, 0, Math.PI / 3], scale: [100, 0.1, 1] },
  { id: "left", intensity: 3, position: [-1, -1, 1], rotation: [0, 0, Math.PI / 3], scale: [100, 0.1, 1] },
  { id: "right", intensity: 3, position: [1, 1, 1], rotation: [0, 0, Math.PI / 3], scale: [100, 0.1, 1] },
  { id: "key", intensity: 10, position: [-10, 0, 14], rotation: [0, Math.PI / 2, Math.PI / 3], scale: [100, 10, 1] },
];

/**
 * The founder's portrait as a 3D event badge on a lanyard that visitors can grab and swing, built with
 * react-three-fiber and Rapier physics. Loaded on demand (see AboutHero). A spinner holds the spot until
 * the badge is ready, then the canvas fades in as the badge swings into place.
 */
const FounderBadge = ({ className }: FounderBadgeProps) => {
  const { textures, isReady, handleReady } = useFounderBadge();

  return (
    <div className={cx(styles.badge, className)} role="img" aria-label={HowWeWorkStrings.hero.BADGE_LABEL}>
      {textures && (
        <Canvas className={cx(styles.canvas, isReady && styles.ready)} camera={CAMERA} dpr={DEVICE_PIXEL_RATIO}>
          <ambientLight intensity={Math.PI} />
          <Physics interpolate gravity={GRAVITY} timeStep={PHYSICS_STEP} updatePriority={PHYSICS_PRIORITY}>
            <BadgeLanyard textures={textures} onReady={handleReady} />
          </Physics>
          <Environment blur={0.75}>
            {STUDIO_LIGHTS.map(({ id, ...light }) => (
              <Lightformer key={id} color="white" {...light} />
            ))}
          </Environment>
        </Canvas>
      )}
      {!isReady && <BadgeLoader className={styles.loading} />}
    </div>
  );
};

export default FounderBadge;
