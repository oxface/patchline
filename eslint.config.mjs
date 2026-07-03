// @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      ".aspire/**",
      "apphost/.aspire/**",
    ],
  },
  js.configs.recommended,
]);
