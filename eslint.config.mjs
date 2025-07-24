import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      js,
      "unused-imports": pluginUnusedImports,
      react: pluginReact,
    },
    extends: ["js/recommended", "plugin:react/recommended"],
    rules: {
      "no-unused-vars": "warn",
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
      camelcase: [
        "error",
        {
          properties: "always", // بررسی پراپرتی‌ها هم
          ignoreDestructuring: false,
        },
      ],
      "react/jsx-pascal-case": ["error"],
    },
  },
  eslintConfigPrettier, // همیشه آخر
]);
