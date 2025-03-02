import globals from "globals";
import jest from "eslint-plugin-jest";
export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      }
    },
    plugins: {
      jest,
    },
    files: ["**/*.js"],
    rules: {
      semi: ["error", "always"],
      "prefer-const": "error",
      eqeqeq:  ["warn", "smart"],
      complexity: ["warn", { "max": 5}],
      "max-depth": ["warn", 4], 
    },
  },
];
