#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

var GREEN = "\x1B[32m";
var YELLOW = "\x1B[33m";
var CYAN = "\x1B[36m";
var RESET = "\x1B[0m";
var cwd = process.cwd();
var __dirname$1 = path.dirname(fileURLToPath(import.meta.url));
var templatesDir = path.resolve(__dirname$1, "../../../templates");
function copyFile(from, to) {
  const fullTo = path.join(cwd, to);
  fs.mkdirSync(path.dirname(fullTo), { recursive: true });
  if (fs.existsSync(fullTo)) {
    console.log(`${YELLOW}  skip${RESET}   ${to} (ya existe)`);
    return;
  }
  fs.copyFileSync(from, fullTo);
  console.log(`${GREEN}  create${RESET}  ${to}`);
}
console.log(
  `
${CYAN}adrianovi init-i18n \u2014 Copiando plantilla de i18n${RESET}
`
);
copyFile(path.join(templatesDir, "i18n/i18n.ts"), "src/i18n/i18n.ts");
copyFile(path.join(templatesDir, "i18n/store.ts"), "src/i18n/store.ts");
copyFile(path.join(templatesDir, "locales/en.json"), "src/locales/en.json");
copyFile(path.join(templatesDir, "locales/es.json"), "src/locales/es.json");
console.log(`
${GREEN}\u2713 Listo.${RESET} Archivos copiados a tu proyecto.`);
console.log(`
  Uso en cualquier componente:`);
console.log(`  ${CYAN}import { useLanguage } from '@/i18n/store'${RESET}`);
console.log(`  ${CYAN}const { t, setLocale } = useLanguage()${RESET}
`);
//# sourceMappingURL=init-i18n.js.map
//# sourceMappingURL=init-i18n.js.map