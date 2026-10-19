/*
 * Shared measurements for the badge, so the 3D clip and the slot printed on the card's texture always
 * line up. World units are the 3D scene's; texture pixels are the card's canvas art.
 */

/** The card in world units; its 1.6:2.25 ratio matches the 1024 × 1440 canvas textures. */
export const CARD_SIZE: [number, number] = [1.6, 2.25];

/** Texture pixels per world unit on the card's front and back. */
export const TEXTURE_PIXELS_PER_UNIT = 640;

/** The lanyard slot near the card's top edge, in texture pixels from the top. */
export const SLOT_TOP = 44;
export const SLOT_HEIGHT = 30;

/** Wide enough to cover both straps where they meet. */
export const CLIP_WIDTH = 0.38;

/** How far the slot extends past the clip on each side, so it reads as a slot the clip sits in. */
const SLOT_OVERHANG = 0.04;

/** The clip runs up past the straps' ends (the hang point is at 1.45), so where they join stays hidden. */
const CLIP_TOP = 1.65;

/** The clip comes down to the middle of the slot, so it reads as passing through it. */
const CLIP_BOTTOM = CARD_SIZE[1] / 2 - (SLOT_TOP + SLOT_HEIGHT / 2) / TEXTURE_PIXELS_PER_UNIT;

const CLIP_DEPTH = 0.05;

export const CLIP_SIZE: [number, number, number] = [CLIP_WIDTH, CLIP_TOP - CLIP_BOTTOM, CLIP_DEPTH];
export const CLIP_POSITION: [number, number, number] = [0, (CLIP_TOP + CLIP_BOTTOM) / 2, 0];

/** The slot's width in texture pixels: the clip's width plus a little room on each side. */
export const SLOT_WIDTH = (CLIP_WIDTH + 2 * SLOT_OVERHANG) * TEXTURE_PIXELS_PER_UNIT;
