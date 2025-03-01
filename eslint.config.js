import globals from "globals";
import pluginJs from "@eslint/js";
import jestPlugin from "eslint-plugin-jest"; 


/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    languageOptions: { globals: globals.node },
    plugins: {jest: jestPlugin},    
  },
  pluginJs.configs.recommended,
  jestPlugin.configs.recommended,
  {
    rules:{
      "no-unused-vars": "warn",
      "no-undef": "warn",
      //"eqeqeq": ["warn", "smart"],
    }
  }
];