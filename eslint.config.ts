import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import {defineConfig, globalIgnores} from "eslint/config";

export default defineConfig([
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    globalIgnores([
        "app/components/react-bits/*", //Ignoring linting components imported from shadcdn
    ]),
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        languageOptions: {globals: globals.browser},
        rules: {'react/react-in-jsx-scope': 'off',}
    },
]);
