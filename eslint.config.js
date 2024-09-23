import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { 
    languageOptions: { 
      globals: { ...globals.browser, ...globals.mocha }, // Añadir Mocha al entorno global
    }
  },
  pluginJs.configs.recommended,
];
