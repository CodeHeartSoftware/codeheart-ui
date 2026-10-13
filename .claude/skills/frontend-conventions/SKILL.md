---
name: frontend-conventions
description: Defines how components, hooks, utils, styles, copy, and test IDs are structured and where they live in the CodeHeart site (React 19 + Vite + CSS Modules). Use when creating or refactoring any component, hook, util, page section, or stylesheet under src/.
---

# Frontend conventions

Single Vite + React 19 app. Styling is co-located CSS Modules backed by design tokens; tests are Vitest + React Testing Library. Shared code lives in `src/components`, `src/utils`, `src/constants`; anything used by only one page lives under that page.

```
src/
  components/<Name>/            shared, used by 2+ pages (Arrow, Brand, LogoMark, TagList, UnderlineLink, ...)
  pages/<Page>/
    <Page>.tsx                  composes sections only, no markup of its own beyond <main>
    components/<Name>/          page-specific sections and their list items
  layouts/                      route wrappers (RootLayout)
  constants/
    strings.ts                  all user-facing copy (SharedStrings, HomeStrings, HowWeWorkStrings)
    content.ts                  structured data lists (PROJECTS, CAPABILITIES, NAV_ITEMS, ...)
    routes.ts                   Routes, SectionIds
    contact.ts                  ENCODED_CONTACT_EMAIL (obfuscated, see "Contact email" below)
    testIds.ts                  TestIds + build*TestId functions
  types/content.ts              types for the content data
  utils/                        pure functions, each with a co-located *.test.ts
  styles/tokens.css             Tailwind v4 `@theme static` design tokens
  index.css                     resets, `.shell`, reduced-motion only
  test/                         Vitest setup + renderWithRouter helper
```

## Quick start

Component folder: `ProjectCard/ProjectCard.tsx`, `ProjectCard.module.css`, and optionally `useProjectCard.ts` + tests.

```tsx
import TagList from "@/components/TagList/TagList";
import { HomeStrings } from "@/constants/strings";
import { buildProjectCardTestId } from "@/constants/testIds";
import type { Project, ProjectTone } from "@/types/content";
import { cx } from "@/utils/classNames";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const toneClassNames: Record<ProjectTone, string> = {
  blush: styles.blush,
  rose: styles.rose,
  berry: styles.berry,
};

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <article className={cx(styles.card, toneClassNames[project.tone])} data-testid={buildProjectCardTestId(project.id)}>
    <h3>{project.title}</h3>
    <TagList tags={project.tags} tone="ink" />
  </article>
);

export default ProjectCard;
```

Note the order (imports → props type → lookup maps/constants → component → default export), variants resolved through a typed `Record` of module classes instead of string-built class names, copy and test IDs from constants, and no raw values in the TSX.

Hook backing a component:

```ts
import { useState } from "react";

export function useSiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  return { isMenuOpen, toggleMenu, closeMenu };
}
```

If the hook takes arguments, declare `interface UseXParams { ... }` directly above it and destructure it in the signature.

Util:

```ts
export const formatIndexNumber = (index: number): string => String(index + 1).padStart(2, "0");
```

Named export, no React, no DOM state of its own. That's what makes it a util.

## Workflows

### Create or refactor a component

1. One component per file, in a folder of the same name: `Name/Name.tsx` + `Name/Name.module.css`. A small list-item child used only by its parent may sit in the parent's folder (e.g. `TagList/Tag.tsx`, `SiteNav/NavItemLink.tsx`) with its own `.module.css`.
2. Write it as an arrow function and `export default` it (project rule from AGENTS.md).
3. Order the file: imports → props `type` → module-level lookup maps / named constants → component → `export default`.
4. Extract non-trivial state, effects, refs, and handlers into a co-located `use<ComponentName>.ts` hook. Skip it only for purely presentational components (most sections here are).
5. Placement: page-local (`src/pages/<Page>/components`) by default. Promote to `src/components` the moment a second page needs it, and replace the cross-page import. Pages must never import from another page's folder.
6. If it renders a mapped list, extract the item into its own component (`ProjectCard`, `CapabilityCard`, `ProcessStepCard`, `NavItemLink`, `Tag`) instead of inlining markup in `.map()`. Use a stable `key` from the data (`id`, `title`), not the index.
7. Choosing between variants (art type, tone, size): use a typed lookup map, e.g. `Record<ProjectArtType, ComponentType>` or `Record<Tone, string>`, not an `if`/`switch` chain or a ternary. See `ProjectArt.tsx`.
8. KISS on JSX ternaries: each branch must be one short line or a single named component. If a branch needs a `.map()` or several elements, extract it into its own component. For conditional classes use `cx(styles.base, isOpen && styles.open)`.
9. No hardcoded copy. Every user-facing string, `aria-label` included, comes from `src/constants/strings.ts`. Interpolated copy is a function on the strings object (`HomeStrings.work.caseStudyLabel(title)`). Structured data goes in `src/constants/content.ts`. Display numbers like "01" are derived with `formatIndexNumber(index)`, never stored.
10. No hardcoded test IDs. Use `data-testid={TestIds.X}`. A test ID built from data is a `build*TestId` function in `src/constants/testIds.ts`. The moment you write `` `foo-${bar}` `` as a test ID anywhere (JSX, a local const, a hook's derived value), stop and move it into that file.
11. Routes and in-page section ids come from `src/constants/routes.ts` (`Routes.HOW_WE_WORK`, `SectionIds.WORK`). Build hash hrefs with `toSectionHref(id)`. Any "contact us" CTA links to `Routes.CONTACT`, never to a `mailto:`.
12. Links: always use `AppLink`, `UnderlineLink`, or `Brand`, never a raw router `Link` or `<a>`. Pass `to` for in-app routes: it renders a router `Link` that runs the page-slide view transition and tags its direction (back when going home). Pass `href` for `#section` anchors (smooth-scrolled through `scrollToSection`, which respects reduced motion) and external URLs (opened in a new tab). Don't add a global `scroll-behavior: smooth`; it makes the router's scroll-to-top glide during page transitions.
13. Tests: see "Testing" below.

### Style a component

1. Styles go in the co-located `Name.module.css`, imported as `styles` and applied as `className={styles.x}`. Use camelCase class names. Don't add new rules to `index.css`; it only holds resets, the `.shell` page-width container, the page-transition (`::view-transition-*`) animations, and the reduced-motion override.
2. Colors, fonts, easings, and radii come from `src/styles/tokens.css` as `var(--color-*)`, `var(--font-*)`, `var(--ease-*)`, `var(--radius-*)`. One-off illustration colors inside the project mockups may stay inline. If a value shows up in a second place, promote it to a token.
3. Breakpoints are fixed values (CSS can't use variables in `@media`): tablet `@media (max-width: 1100px)`, mobile `@media (max-width: 760px)`. Put a component's media queries at the bottom of its own module.
4. Page-width container: combine the global `shell` class with the module class, `className={cx("shell", styles.section)}`. Don't re-implement the width/margin logic.
5. Property ownership. A shared component's `className` prop is only for properties that component doesn't set itself (margin, max-width, grid placement, animation). Two modules' classes have equal specificity and their load order isn't guaranteed, so overriding a property the child already sets is a race. If a caller needs a different value of an owned property, add a variant prop (`tone`, `size`) backed by a lookup map. Examples: `LogoMark size`/`tone`, `UnderlineLink size`, `SectionKicker tone`, `TagList tone`; `SectionTitle` owns typography only and callers pass margins.
6. Parent hover affecting a child component: put the global `group` class on the parent (`cx("group", styles.card)`) and target it from the child's module with `:global(.group):hover .x`. Document the requirement in a one-line comment on the child. This is the only sanctioned use of `:global`.
7. Define `@keyframes` inside the module that uses them. Animation names are module-scoped, so a global keyframe can't be referenced from a module. A small duplicate (e.g. `spin`) is fine.
8. Pseudo-elements, `nth-child`, and element selectors are fine, but only beneath a class the same module owns (`.pulseBars i:nth-child(2)`). Never style another component's internals.

### Create or refactor a hook

1. Co-locate it with its component as `use<ComponentName>.ts`. Only hooks used by two or more components go in `src/hooks/`.
2. File order: params `interface` (if any) → hook.
3. All `useState`, `useRef`, `useEffect`, derived values, and handlers live in the hook, not the component. Exception: a derived test ID belongs in `testIds.ts` as a `build*TestId` function that the hook calls.
4. Keep pure logic out of the hook body. Math, DOM-free transforms, and browser one-liners go into utils that the hook calls (`useHeroSection` → `getPointerStyleVars`, `applyStyleVars`, `prefersReducedMotion`, `scrollToSection`). That's what keeps the hook thin and the logic testable.
5. Always return an object literal, even for a single value.
6. Named export: `export function useX(...)`.
7. Test the hook directly (see "Testing").

### Create or refactor a util

1. Any function with no JSX and no hook calls is a candidate. Exception: test-ID builders stay in `src/constants/testIds.ts`.
2. One concern per file in `src/utils/` (`classNames.ts`, `scroll.ts`, `pointer.ts`, `motion.ts`, `formatIndexNumber.ts`).
3. Named `export const fn = (...) => ...` with explicit parameter and return types. Name magic numbers as module constants (`MAX_TILT_X_DEG`).
4. Full unit-test coverage in a co-located `*.test.ts`, including edge cases (empty input, missing element, boundary values).

## Testing

- Commands: `yarn test` (CI mode), `yarn test:watch`, `yarn typecheck`, `yarn build`.
- Tests sit next to the file they cover as `*.test.ts` / `*.test.tsx`. Import `describe`/`it`/`expect`/`vi` from `vitest` explicitly. There are no globals.
- Hooks: test with `renderHook` + `act`. If the hook needs a ref attached before its mount effect runs, render a minimal harness component that attaches the ref (see `useHeroSection.test.tsx`). Don't assign `ref.current` after rendering; the effect has already run.
- Components: test directly only when they keep inline conditional rendering (e.g. `SiteNav`'s open class, `AppLink`'s `to`/`href` branch). Query by role, label, or `TestIds`. CSS Module class names are unscoped in tests, so `toHaveClass("linksOpen")` works.
- Pages: one smoke test each, rendered through `renderWithRouter` from `src/test/renderWithRouter.tsx`, asserting that the data-driven lists render.
- Mock ES modules with `vi.mock("@/utils/x", () => ({ ... }))` + `vi.mocked(fn)`. Don't use `vi.spyOn` on module namespaces; ESM exports aren't configurable.

## Contact email

The contact address must never appear as plain text in the repo, the bundle, or the initial DOM, so scrapers can't harvest it.

- It is stored only as `ENCODED_CONTACT_EMAIL` in `src/constants/contact.ts` (reversed + base64). The file's comment has the one-liner to re-encode a new address.
- Decode it with `decodeEmail` only inside a click handler (see `useContactHero`), and only on the contact page. Open the mail app with `openMailClient(buildMailtoHref(...))` rather than rendering a `mailto:` href up front.
- Tests must not contain the real address either: decode `ENCODED_CONTACT_EMAIL` at runtime, or use a sample like `someone@example.com`.

## Reference

- Props: once a component passes ~10 props, introduce a context/provider instead of drilling further.
- Imports use the `@/` alias for anything outside the component's own folder and relative paths (`./`, `../Sibling/Sibling`) inside a page's `components/` tree.
- Strings use double quotes and typographic apostrophes (`’`) in copy. An unescaped `'` inside a single-quoted string breaks the build.
- Scroll restoration is handled once in `RootLayout` (`<ScrollRestoration />`). Don't add per-page `window.scrollTo` effects.
- Before calling a component, hook, or stylesheet done, run these from the repo root. Each must print nothing:
  - `grep -rn 'data-testid={\`' src` — inline template-literal test IDs
  - `grep -rnE '(aria-label|title|alt)="[A-Za-z]' src --include='*.tsx'` — hardcoded copy in attributes
  - `grep -rniE '#(32101d|fff5f7|fffafb|ed335b|c91d46|2a0b17|a92e55|f3bfd0|76515f|8a6471|865f6c|c9aeb7|e8b0c6|f19ab0|d86a8e)' src --include='*.module.css'` — raw hex values that already have a token
  - `grep -rn "from \"@/pages" src` — cross-page imports
- Then run `yarn test && yarn typecheck && yarn build`.
