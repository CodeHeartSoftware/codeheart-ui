import type { ThreeElement } from "@react-three/fiber";
import type { MeshLineGeometry, MeshLineMaterial } from "meshline";

/** Registers MeshLine's classes (extended in FounderBadge) as JSX elements inside a react-three-fiber Canvas. */
declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>;
    meshLineMaterial: ThreeElement<typeof MeshLineMaterial>;
  }
}
