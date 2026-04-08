"use client";

import { I18n } from "i18n-js";
import enTranslations from "@/locales/en.json";
import esTranslations from "@/locales/es.json";

const i18n = new I18n({
  en: enTranslations,
  es: esTranslations,
});

i18n.defaultLocale = "es";
i18n.locale = "es";
i18n.enableFallback = true;

export default i18n;
