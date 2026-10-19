import type { ThreeEvent } from "@react-three/fiber";
import type { Ref } from "react";
import type { Group } from "three";
import type { BadgeTextures } from "./badgeArt";
import { CARD_SIZE, CLIP_POSITION, CLIP_SIZE } from "./badgeGeometry";

type BadgeCardProps = {
  /** The card's drawn group, which the lanyard reads to end the strap exactly at the clip. */
  ref?: Ref<Group>;
  textures: BadgeTextures;
  onPointerDown: (event: ThreeEvent<PointerEvent>) => void;
  onPointerUp: (event: ThreeEvent<PointerEvent>) => void;
  onPointerOver: () => void;
  onPointerOut: () => void;
};

/** Front and back faces sit this far either side of the card's center, giving it a little thickness. */
const FACE_OFFSET = 0.006;

/** The metal clip joining the straps to the card; sized and placed in badgeGeometry to meet the slot. */
const CLIP_COLOR = "#c9aeb7";

/** Glossy laminate: clear-coated like a real event badge, so the studio lights glint across it. */
const LAMINATE = {
  clearcoat: 1,
  clearcoatRoughness: 0.15,
  roughness: 0.35,
  metalness: 0.1,
  alphaTest: 0.5,
} as const;

const BadgeCard = ({ ref, textures, ...handlers }: BadgeCardProps) => (
  <group ref={ref} {...handlers}>
    <mesh position={[0, 0, FACE_OFFSET]}>
      <planeGeometry args={CARD_SIZE} />
      <meshPhysicalMaterial map={textures.front} {...LAMINATE} />
    </mesh>
    <mesh position={[0, 0, -FACE_OFFSET]} rotation={[0, Math.PI, 0]}>
      <planeGeometry args={CARD_SIZE} />
      <meshPhysicalMaterial map={textures.back} {...LAMINATE} />
    </mesh>
    {/* Drawn after the strap and over it (the strap ignores depth), so the clip hides the strap's end. */}
    <mesh position={CLIP_POSITION} renderOrder={1}>
      <boxGeometry args={CLIP_SIZE} />
      <meshStandardMaterial color={CLIP_COLOR} metalness={0.9} roughness={0.3} depthTest={false} />
    </mesh>
  </group>
);

export default BadgeCard;
