// @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: ["node_modules/**", "dist/**", "build/**", "coverage/**", ".aspire/integrations/**"],
  },
  js.configs.recommended,
  {
    files: ["apphost.mts"],
    extends: [tseslint.configs.base],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.apphost.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-floating-promises": ["error", { checkThenables: true }],
    },
  },
]);
