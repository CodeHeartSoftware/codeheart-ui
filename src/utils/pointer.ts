type PointerPosition = {
  clientX: number;
  clientY: number;
};

type ElementBounds = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const MAX_TILT_X_DEG = 10;
const MAX_TILT_Y_DEG = -8;

/**
 * Maps a pointer position inside an element to the CSS custom properties that
 * drive the hero glow (`--pointer-x/y`), the window tilt (`--tilt-*`), and the
 * backdrop parallax (`--pointer-ratio-*`, unitless, -0.5 at the left/top edge to 0.5 at the right/bottom).
 */
export const getPointerStyleVars = (
  { clientX, clientY }: PointerPosition,
  bounds: ElementBounds,
): Record<string, string> => {
  const x = clientX - bounds.left;
  const y = clientY - bounds.top;
  const ratioX = x / bounds.width - 0.5;
  const ratioY = y / bounds.height - 0.5;

  return {
    "--pointer-x": `${x}px`,
    "--pointer-y": `${y}px`,
    "--tilt-x": `${ratioX * MAX_TILT_X_DEG}deg`,
    "--tilt-y": `${ratioY * MAX_TILT_Y_DEG}deg`,
    "--pointer-ratio-x": `${ratioX}`,
    "--pointer-ratio-y": `${ratioY}`,
  };
};

export const applyStyleVars = (element: HTMLElement, vars: Record<string, string>): void => {
  Object.entries(vars).forEach(([name, value]) => element.style.setProperty(name, value));
};
