import {CanvasTexture, RepeatWrapping, SRGBColorSpace} from "three";
import founderPortrait from "@/assets/images/founder-portrait.jpg";
import {LOGO_BOUNDS, LOGO_PATH} from "@/constants/logo";
import {HowWeWorkStrings, SharedStrings} from "@/constants/strings";
import {CARD_SIZE, SLOT_HEIGHT, SLOT_TOP, SLOT_WIDTH, TEXTURE_PIXELS_PER_UNIT} from "./badgeGeometry";

export type BadgeTextures = {
  front: CanvasTexture;
  back: CanvasTexture;
  band: CanvasTexture;
};

type Palette = {
  surface: string;
  deep: string;
  coral: string;
  coralDark: string;
  paper: string;
  muted: string;
};

/** Card texture size in px, derived from the card's world size so the two always match. */
const CARD_WIDTH = Math.round(CARD_SIZE[0] * TEXTURE_PIXELS_PER_UNIT);
const CARD_HEIGHT = Math.round(CARD_SIZE[1] * TEXTURE_PIXELS_PER_UNIT);
const CARD_RADIUS = 64;
const CARD_MARGIN = 112;

/** The portrait keeps the photo's 4:5 ratio. */
const PORTRAIT_WIDTH = 760;
const PORTRAIT_HEIGHT = 950;
const PORTRAIT_TOP = 230;
const PORTRAIT_RADIUS = 36;

/** The strap's texture, one repeat of the pattern; MeshLine tiles it along the band. */
const BAND_WIDTH = 1024;
const BAND_HEIGHT = 96;
const BAND_REPEATS_PER_TILE = 2;

const TEXTURE_ANISOTROPY = 8;

/** Every face the art uses, loaded before drawing so the canvas never falls back to a system font. */
const FONTS = ["700 50px Manrope", "600 80px Manrope", "600 30px 'DM Sans'"];

/** Reads the palette from the design tokens, so the badge matches the rest of the site. */
const readPalette = (): Palette => {
  const tokens = getComputedStyle(document.documentElement);
  const token = (name: string) => tokens.getPropertyValue(name).trim();

  return {
    surface: token("--color-surface"),
    deep: token("--color-bg-deep"),
    coral: token("--color-coral"),
    coralDark: token("--color-coral-dark"),
    paper: token("--color-paper"),
    muted: token("--color-text-on-dark"),
  };
};

const createCanvas = (width: number, height: number) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("2D canvas is unavailable.");

  return { canvas, context };
};

/** Fills the "<3" mark `height` px tall with its top-left corner at (x, y), and returns its width. */
const drawLogo = (context: CanvasRenderingContext2D, x: number, y: number, height: number, color: string): number => {
  const scale = height / LOGO_BOUNDS.height;

  context.save();
  context.translate(x, y);
  context.scale(scale, scale);
  context.translate(-LOGO_BOUNDS.x, -LOGO_BOUNDS.y);
  context.fillStyle = color;
  context.fill(new Path2D(LOGO_PATH));
  context.restore();

  return LOGO_BOUNDS.width * scale;
};

/** The rounded card shape (corners stay transparent) with a lanyard slot punched near the top. */
const drawCardBase = (context: CanvasRenderingContext2D, palette: Palette) => {
  context.beginPath();
  context.roundRect(0, 0, CARD_WIDTH, CARD_HEIGHT, CARD_RADIUS);
  context.clip();

  const gradient = context.createLinearGradient(0, 0, 0, CARD_HEIGHT);
  gradient.addColorStop(0, palette.surface);
  gradient.addColorStop(1, palette.deep);
  context.fillStyle = gradient;
  context.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

  // A touch wider than the 3D clip, which sits centered in it.
  context.fillStyle = "rgba(0, 0, 0, 0.5)";
  context.beginPath();
  context.roundRect((CARD_WIDTH - SLOT_WIDTH) / 2, SLOT_TOP, SLOT_WIDTH, SLOT_HEIGHT, SLOT_HEIGHT / 2);
  context.fill();
};

const drawFront = (palette: Palette, portrait: HTMLImageElement): HTMLCanvasElement => {
  const { canvas, context } = createCanvas(CARD_WIDTH, CARD_HEIGHT);
  drawCardBase(context, palette);

  // Brand row: the mark and name on the left, the founding year on the right.
  const logoWidth = drawLogo(context, CARD_MARGIN, 130, 52, palette.coral);
  context.textBaseline = "middle";
  context.fillStyle = palette.paper;
  context.font = FONTS[0];
  context.letterSpacing = "-1px";
  context.fillText(SharedStrings.BRAND_NAME, CARD_MARGIN + logoWidth + 20, 158);

  context.textAlign = "right";
  context.fillStyle = palette.muted;
  context.font = "600 26px 'DM Sans'";
  context.letterSpacing = "4px";
  context.fillText(HowWeWorkStrings.hero.ESTABLISHED.toUpperCase(), CARD_WIDTH - CARD_MARGIN, 158);

  // Portrait, centered.
  const portraitLeft = (CARD_WIDTH - PORTRAIT_WIDTH) / 2;
  context.save();
  context.beginPath();
  context.roundRect(portraitLeft, PORTRAIT_TOP, PORTRAIT_WIDTH, PORTRAIT_HEIGHT, PORTRAIT_RADIUS);
  context.clip();
  context.drawImage(portrait, portraitLeft, PORTRAIT_TOP, PORTRAIT_WIDTH, PORTRAIT_HEIGHT);
  context.restore();

  // Name and title under the photo.
  const textTop = PORTRAIT_TOP + PORTRAIT_HEIGHT;
  context.textAlign = "left";
  context.textBaseline = "alphabetic";
  context.fillStyle = palette.paper;
  context.font = FONTS[1];
  context.letterSpacing = "-2px";
  context.fillText(HowWeWorkStrings.hero.FOUNDER_NAME, portraitLeft, textTop + 104);

  context.fillStyle = palette.coral;
  context.font = FONTS[2];
  context.letterSpacing = "5px";
  context.fillText(HowWeWorkStrings.hero.PORTRAIT_ROLE.toUpperCase(), portraitLeft, textTop + 162);

  return canvas;
};

const drawBack = (palette: Palette): HTMLCanvasElement => {
  const { canvas, context } = createCanvas(CARD_WIDTH, CARD_HEIGHT);
  drawCardBase(context, palette);

  const logoHeight = 220;
  const logoWidth = (LOGO_BOUNDS.width / LOGO_BOUNDS.height) * logoHeight;
  drawLogo(context, (CARD_WIDTH - logoWidth) / 2, CARD_HEIGHT / 2 - logoHeight, logoHeight, palette.coral);

  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = palette.muted;
  context.font = "600 34px 'DM Sans'";
  context.letterSpacing = "3px";
  context.fillText(HowWeWorkStrings.hero.BADGE_WEBSITE, CARD_WIDTH / 2, CARD_HEIGHT / 2 + 110);

  return canvas;
};

/** The strap: the brand name and mark, repeated, on coral. */
const drawBand = (palette: Palette): HTMLCanvasElement => {
  const { canvas, context } = createCanvas(BAND_WIDTH, BAND_HEIGHT);
  context.fillStyle = palette.coralDark;
  context.fillRect(0, 0, BAND_WIDTH, BAND_HEIGHT);

  const repeatWidth = BAND_WIDTH / BAND_REPEATS_PER_TILE;
  context.textBaseline = "middle";
  context.fillStyle = palette.paper;
  context.font = "700 44px Manrope";
  context.letterSpacing = "8px";

  for (let index = 0; index < BAND_REPEATS_PER_TILE; index += 1) {
    const left = index * repeatWidth + 40;
    const logoWidth = drawLogo(context, left, BAND_HEIGHT / 2 - 18, 36, palette.paper);
    context.fillText(SharedStrings.BRAND_NAME.toUpperCase(), left + logoWidth + 22, BAND_HEIGHT / 2 + 2);
  }

  return canvas;
};

const toTexture = (canvas: HTMLCanvasElement, repeats = false): CanvasTexture => {
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = TEXTURE_ANISOTROPY;
  if (repeats) texture.wrapS = texture.wrapT = RepeatWrapping;

  return texture;
};

/** Waits for the portrait and fonts, then draws the badge's front, back, and strap textures. */
export const loadBadgeTextures = async (): Promise<BadgeTextures> => {
  const portrait = new Image();
  portrait.src = founderPortrait;
  await Promise.all([portrait.decode(), ...FONTS.map((font) => document.fonts.load(font))]);

  const palette = readPalette();

  return {
    front: toTexture(drawFront(palette, portrait)),
    back: toTexture(drawBack(palette)),
    band: toTexture(drawBand(palette), true),
  };
};

export const disposeBadgeTextures = ({ front, back, band }: BadgeTextures): void => {
  front.dispose();
  back.dispose();
  band.dispose();
};
