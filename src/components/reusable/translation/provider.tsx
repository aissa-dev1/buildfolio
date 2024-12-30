"use client";

import { service } from "@/services";
import { useTranslationStore } from "@/stores/translation";
import { PropsWithChildren, useEffect, useState } from "react";

interface TranslationProviderProps extends PropsWithChildren {}

/**
 * @deprecated
 * This component is not currently in use
 */
export default function TranslationProvider({
  children,
}: TranslationProviderProps) {
  const lang = useTranslationStore((state) => state.lang);
  const setLanguage = useTranslationStore((state) => state.setLanguage);
  // const dir = useTranslationStore((state) => state.dir);
  // const setDirection = useTranslationStore((state) => state.setDirection);
  const setTree = useTranslationStore((state) => state.setTree);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");

    async function fetchTranslation() {
      try {
        const translation = await service.translation.get(lang);
        setTree(translation);
      } catch (error) {
        console.error("Failed to fetch translations:", error);
      }
    }

    if (!isInitialized) {
      if (storedLang && storedLang !== lang) {
        setLanguage(storedLang);
      }

      setIsInitialized(true);
    } else {
      localStorage.setItem("lang", lang);
      fetchTranslation();
    }
  }, [lang, isInitialized, setLanguage, setTree]);

  useEffect(() => {
    // handle direction
  }, [lang]);

  return <>{children}</>;
}
