#!/usr/bin/env bash
set -euo pipefail

# ─── Colores ──────────────────────────────────────────────────────────────────
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${CYAN}======================================${NC}"
echo -e "${CYAN}   adrianovi — Actualizar dependencias${NC}"
echo -e "${CYAN}======================================${NC}\n"

# ─── 1. Verificar que npm-check-updates está instalado ───────────────────────
if ! command -v ncu &>/dev/null; then
  echo -e "${YELLOW}Instalando npm-check-updates globalmente...${NC}"
  npm install -g npm-check-updates
fi

# ─── 2. Mostrar qué hay desactualizado ───────────────────────────────────────
echo -e "${CYAN}→ Paquetes con nuevas versiones disponibles:${NC}"
ncu --color || true
echo ""

# ─── 3. Confirmar antes de actualizar ────────────────────────────────────────
read -rp "¿Actualizar todas las dependencias? [s/N] " respuesta
if [[ ! "$respuesta" =~ ^[sS]$ ]]; then
  echo -e "${YELLOW}Cancelado.${NC}"
  exit 0
fi

# ─── 4. Actualizar package.json con las últimas versiones ────────────────────
echo -e "\n${CYAN}→ Actualizando package.json...${NC}"
ncu -u

# ─── 5. Instalar las versiones nuevas ────────────────────────────────────────
echo -e "\n${CYAN}→ Instalando paquetes actualizados...${NC}"
npm install

# ─── 6. Compilar para verificar que todo funciona ────────────────────────────
echo -e "\n${CYAN}→ Compilando para verificar que no hay errores...${NC}"
npm run build

# ─── 7. Bump automático de patch version ─────────────────────────────────────
read -rp $'\n¿Hacer bump de versión y publicar en npm? [s/N] ' publicar
if [[ "$publicar" =~ ^[sS]$ ]]; then
  echo -e "\n${CYAN}→ Bump de versión patch...${NC}"
  npm version patch
  echo -e "\n${CYAN}→ Publicando en npm...${NC}"
  npm publish
  echo -e "\n${GREEN}✓ Publicado exitosamente en npm${NC}"
else
  echo -e "\n${GREEN}✓ Dependencias actualizadas y compiladas correctamente.${NC}"
  echo -e "${YELLOW}  Para publicar manualmente: npm version patch && npm publish${NC}"
fi
