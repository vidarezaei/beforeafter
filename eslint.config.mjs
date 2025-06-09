import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: parserTs,
      globals: globals.browser,
    },
    plugins: {
      js,
      "unused-imports": pluginUnusedImports,
      "@typescript-eslint": pluginTs,
    },
    extends: ["js/recommended"],
    rules: {
      // حذف import های بلااستفاده
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // قانون نام‌گذاری توابع
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "function",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
      ],
    },
  },

  pluginReact.configs.flat.recommended,
  eslintConfigPrettier, // همیشه آخر باشه
]);
