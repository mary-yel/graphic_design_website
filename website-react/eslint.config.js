import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    {
        ignores: ["dist", "build", "node_modules", "vite.config.js"],
    },

    js.configs.recommended,

    {
        files: ["**/*.{js,jsx}"],

        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            import: importPlugin,
        },

        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                sourceType: "module",
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
            },
        },

        settings: {
            react: { version: "detect" },
            "import/resolver": {
                node: {
                    extensions: [".js", ".jsx"],
                },
            },
        },

        rules: {
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",

            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            semi: ["error", "always"],
            quotes: ["error", "double"],
            indent: ["error", 4],
            "max-len": ["error", { code: 250 }],
            "block-spacing": "error",
            "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],

            "import/order": [
                "error",
                {
                    groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                    "newlines-between": "always",
                },
            ],

            "no-console": ["warn", { allow: ["info", "warn", "error"] }],
            "no-unused-vars": [
                "error",
                {
                    vars: "all",
                    args: "all",
                    argsIgnorePattern: "^_",
                },
            ],
        },
    },

    prettierConfig,
];
