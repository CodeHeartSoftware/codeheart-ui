/** Whether this browser can create a WebGL context. Some locked-down browsers, and test environments, can't. */
export const supportsWebGL = (): boolean => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
};
