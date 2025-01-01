"use client";

import { useAppearanceStore } from "@/stores/appearance";
import { PropsWithChildren, useEffect } from "react";

interface AppearanceProviderProps extends PropsWithChildren {}

export default function AppearanceProvider({
  children,
}: AppearanceProviderProps) {
  const initTheme = useAppearanceStore((state) => state.initTheme);

  useEffect(() => {
    initTheme();
  }, []);

  return <>{children}</>;
}
