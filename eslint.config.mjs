import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        jest: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
];
