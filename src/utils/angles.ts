type Quaternion = { x: number; y: number; z: number; w: number };

/** Wraps an angle in radians into (-π, π], so the shortest way around is always taken. */
export const wrapAngle = (angle: number): number => Math.atan2(Math.sin(angle), Math.cos(angle));

/** The rotation around the vertical axis, in radians, of a quaternion that turns mostly about that axis. */
export const yawOf = ({ y, w }: Quaternion): number => 2 * Math.atan2(y, w);
