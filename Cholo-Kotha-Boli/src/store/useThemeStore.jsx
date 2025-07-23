// stores/useThemeStore.js
import { create } from "zustand";


export const themes = ["light", "dark", "cupcake", "forest", "dracula", "synthwave"];

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "light",
  setTheme: (theme) => {
    if (themes.includes(theme)) {
      localStorage.setItem("theme", theme);
      set({ theme });
    }
  },
}));
