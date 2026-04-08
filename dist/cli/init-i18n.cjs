#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');
var url = require('url');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var fs__default = /*#__PURE__*/_interopDefault(fs);
var path__default = /*#__PURE__*/_interopDefault(path);

var GREEN = "\x1B[32m";
var YELLOW = "\x1B[33m";
var CYAN = "\x1B[36m";
var RESET = "\x1B[0m";
var cwd = process.cwd();
var __dirname$1 = path__default.default.dirname(url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('init-i18n.cjs', document.baseURI).href))));
var templatesDir = path__default.default.resolve(__dirname$1, "../../templates");
function copyFile(from, to) {
  const fullTo = path__default.default.join(cwd, to);
  fs__default.default.mkdirSync(path__default.default.dirname(fullTo), { recursive: true });
  if (fs__default.default.existsSync(fullTo)) {
    console.log(`${YELLOW}  skip${RESET}   ${to} (ya existe)`);
    return;
  }
  fs__default.default.copyFileSync(from, fullTo);
  console.log(`${GREEN}  create${RESET}  ${to}`);
}
console.log(
  `
${CYAN}adrianovi init-i18n \u2014 Copiando plantilla de i18n${RESET}
`
);
copyFile(path__default.default.join(templatesDir, "i18n/i18n.ts"), "src/i18n/i18n.ts");
copyFile(path__default.default.join(templatesDir, "i18n/store.ts"), "src/i18n/store.ts");
copyFile(path__default.default.join(templatesDir, "locales/en.json"), "src/locales/en.json");
copyFile(path__default.default.join(templatesDir, "locales/es.json"), "src/locales/es.json");
console.log(`
${GREEN}\u2713 Listo.${RESET} Archivos copiados a tu proyecto.`);
console.log(`
  Uso en cualquier componente:`);
console.log(`  ${CYAN}import { useLanguage } from '@/i18n/store'${RESET}`);
console.log(`  ${CYAN}const { t, setLocale } = useLanguage()${RESET}
`);
//# sourceMappingURL=init-i18n.cjs.map
//# sourceMappingURL=init-i18n.cjs.map