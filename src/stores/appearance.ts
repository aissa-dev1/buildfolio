import { create } from "zustand";

interface AppearanceStoreState {
  theme: string;

  setTheme(theme: string): void;
  toggleTheme(): void;
  initTheme(): void;
}

export const useAppearanceStore = create<AppearanceStoreState>((set) => ({
  theme: "light",

  setTheme(theme: string) {
    set((state) => {
      if (state.theme !== theme) {
        document.body.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
      }
      return { ...state, theme };
    });
  },
  toggleTheme() {
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";

      if (state.theme !== newTheme) {
        document.body.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
      }
      return { theme: newTheme };
    });
  },
  initTheme() {
    const theme = localStorage.getItem("theme") || "light";
    set({ theme });
    document.body.classList.toggle("dark", theme === "dark");
  },
}));
