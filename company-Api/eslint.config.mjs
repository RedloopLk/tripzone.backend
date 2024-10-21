import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  // Apply ESLint to all .js, .mjs, .cjs, and .ts files
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    // Use the TypeScript parser for both JavaScript and TypeScript files
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021, // Set the ECMAScript version
        sourceType: "module", // Support ES Modules (import/export)
        project: "./tsconfig.json", // Enable TypeScript project configuration
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn", // Discourage 'any' usage
      "@typescript-eslint/explicit-module-boundary-types": "off", // Optional, depending on preference
      "no-console": "warn", // Warn on console.log statements
      "quotes": ["error", "single"], // Enforce single quotes
      "semi": ["error", "always"], // Enforce semicolons
      "indent": ["error", 2], // Enforce 2-space indentation
    },
  },
  // Base configuration for JavaScript
  pluginJs.configs.recommended,
  // Base configuration for TypeScript
  ...tseslint.configs.recommended,
];
