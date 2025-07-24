import globals from "globals";
import importPlugin from 'eslint-plugin-import';
import eslint from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHook from 'eslint-plugin-react-hooks';

export default [
  eslint.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      }
    },
    plugins: {
      import: importPlugin,
      prettier: prettier,
      react: react,
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHook,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/jsx-uses-vars': 'warn',
      'import/no-named-as-default': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/self-closing-comp': 'warn',
    },
  },
]
