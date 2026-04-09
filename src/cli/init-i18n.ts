#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const CYAN = "\x1b[36m";
const RESET = "\x1b[0m";

const cwd = process.cwd();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatesDir = path.resolve(__dirname, "../../../templates");

function copyFile(from: string, to: string) {
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
  `\n${CYAN}adrianovi init-i18n — Copiando plantilla de i18n${RESET}\n`,
);

copyFile(path.join(templatesDir, "i18n/i18n.ts"), "src/i18n/i18n.ts");
copyFile(path.join(templatesDir, "i18n/store.ts"), "src/i18n/store.ts");
copyFile(path.join(templatesDir, "locales/en.json"), "src/locales/en.json");
copyFile(path.join(templatesDir, "locales/es.json"), "src/locales/es.json");

console.log(`\n${GREEN}✓ Listo.${RESET} Archivos copiados a tu proyecto.`);
console.log(`\n  Uso en cualquier componente:`);
console.log(`  ${CYAN}import { useLanguage } from '@/i18n/store'${RESET}`);
console.log(`  ${CYAN}const { t, setLocale } = useLanguage()${RESET}\n`);
