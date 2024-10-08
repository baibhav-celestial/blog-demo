import globals from "globals";
import pluginReact from "eslint-plugin-react";


export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      "react/no-unescaped-entities": "off"
    }
  },
  { languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
];