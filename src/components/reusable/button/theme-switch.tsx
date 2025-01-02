"use client";

import MoonIcon from "@/components/icons/outline/moon";
import SunIcon from "@/components/icons/outline/sun";
import Button from "@/components/ui/button";
import { useAppearanceStore } from "@/stores/appearance";

export default function ThemeSwitchButton() {
  const theme = useAppearanceStore((state) => state.theme);
  const toggleTheme = useAppearanceStore((state) => state.toggleTheme);

  return (
    <Button variant="page" onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
