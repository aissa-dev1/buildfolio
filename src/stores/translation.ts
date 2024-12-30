import { create } from "zustand";

interface TranslationStoreState {
  lang: string;
  dir: string;
  tree: any;

  setLanguage(lang: string): void;
  setDirection(dir: string): void;
  setTree(tree: any): void;
}

/**
 * @deprecated
 * This store is not currently in use
 */
export const useTranslationStore = create<TranslationStoreState>((set) => ({
  lang: "en",
  dir: "ltr",
  tree: {},

  setLanguage(lang: string) {
    set((state) => ({ ...state, lang }));
  },
  setDirection(dir) {
    set((state) => ({ ...state, dir }));
  },
  setTree(tree) {
    set((state) => ({ ...state, tree }));
  },
}));
