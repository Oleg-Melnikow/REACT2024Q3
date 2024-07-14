module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.ts",
    "jest.config.ts",
    "jest.setup.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh", "prettier", "react-compiler"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react-compiler/react-compiler": "error",
    "prettier/prettier": "error",
    "no-debugger": "off",
    "no-console": 0,
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "react/no-array-index-key": "error",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "react/react-in-jsx-scope": "off",
    "class-methods-use-this": "off",
    "react/require-default-props": "off",
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    semi: ["error", "always"],
  },
};
