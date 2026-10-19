import type { MeshLineGeometry, MeshLineMaterialParameters } from "meshline";
import type { Ref } from "react";
import { type CanvasTexture, type Mesh, Vector2 } from "three";

type LanyardStrapProps = {
  /** The mesh whose geometry useBadgeLanyard re-points every frame. */
  ref: Ref<Mesh<MeshLineGeometry>>;
  texture: CanvasTexture;
  /** The canvas size in px, which MeshLine needs to keep the strap's width constant on screen. */
  resolution: [number, number];
};

/** Tiles the strap texture along the band; negative so the lettering reads left to right. */
const STRAP_REPEAT: [number, number] = [-3, 1];

/** Narrower than a single strap, since the necklace shows two side by side. */
const STRAP_WIDTH = 0.8;

/** MeshLineMaterial's constructor requires a resolution; the `resolution` prop keeps it at the canvas size. */
const STRAP_MATERIAL_ARGS: [MeshLineMaterialParameters] = [{ resolution: new Vector2(1, 1) }];

/** One side of the lanyard. It ignores depth, so the card never cuts through it as it swings. */
const LanyardStrap = ({ ref, texture, resolution }: LanyardStrapProps) => (
  <mesh ref={ref}>
    <meshLineGeometry />
    <meshLineMaterial
      args={STRAP_MATERIAL_ARGS}
      color="white"
      depthTest={false}
      resolution={resolution}
      useMap={1}
      map={texture}
      repeat={STRAP_REPEAT}
      lineWidth={STRAP_WIDTH}
    />
  </mesh>
);

export default LanyardStrap;
