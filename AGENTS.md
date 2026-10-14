# codeheart-ui

Marketing site for CodeHeart, built with React 19, Vite, and CSS Modules (Tailwind CSS v4 provides the design-token layer).

## Development

- `yarn dev` starts the Vite dev server on `$PORT` (default 8443). Check whether one is already running before starting another; hot reload picks up source changes.
- `yarn build` writes the static site to `dist/`; `yarn preview` serves that build locally.
- `yarn test`, `yarn typecheck` run Vitest and TypeScript.

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - Mounts the router from `src/routes.tsx`
- `src/routes.tsx` - Route table; every route renders inside `src/layouts/RootLayout.tsx`
- `src/pages/<Page>/<Page>.tsx` - Page composition; page-specific sections live in `src/pages/<Page>/components/`
- `src/components/` - Components shared by more than one page
- `src/constants/` - Copy (`strings.ts`), content data (`content.ts`), routes/section ids (`routes.ts`), and test IDs (`testIds.ts`)
- `src/utils/`, `src/types/` - Pure helper functions and shared types
- `src/styles/tokens.css` - Design tokens (Tailwind v4 `@theme`)
- `src/index.css` - Global CSS entrypoint: Tailwind import, tokens import, resets, and the `.shell` container
- `index.html` - Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `package.json` - Project dependencies and the dev, build, preview, test, typecheck, and formatting scripts
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, the `@` alias for `src`, and the dev server port
- `vitest.config.ts` - Test configuration (happy-dom, setup in `src/test/setup.ts`)

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

Component styles live in co-located CSS Modules. **Tailwind CSS v4** (via the `@tailwindcss/vite` plugin) supplies the reset and the design tokens: `src/index.css` imports Tailwind and `src/styles/tokens.css`, whose `@theme static` block defines the colors, fonts, and easings components reference as `var(--token)`. No Tailwind config file or PostCSS config is needed.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

## Conventions

Follow `.claude/skills/frontend-conventions/SKILL.md` when creating or refactoring components, hooks, utils, or styles. Component styles are co-located CSS Modules (`Name.module.css`) that use the tokens in `src/styles/tokens.css`. Tests run with Vitest (`test` script).

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.
