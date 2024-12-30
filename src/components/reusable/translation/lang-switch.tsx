"use client";

import { useTranslationStore } from "@/stores/translation";

/**
 * @deprecated
 * This component is not currently in use
 */
export default function TranslationLangSwitch() {
  const lang = useTranslationStore((state) => state.lang);
  const setLang = useTranslationStore((state) => state.setLanguage);

  return (
    <div>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
}
