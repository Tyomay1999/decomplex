"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

type ThemeMode = "light" | "dark";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setIsClient(true));
  }, []);

  const current = useMemo<ThemeMode>(() => {
    return resolvedTheme === "dark" ? "dark" : "light";
  }, [resolvedTheme]);

  const next: ThemeMode = current === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      disabled={!isClient}
      onClick={() => setTheme(next)}
      className="rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold disabled:opacity-60 dark:border-slate-700"
    >
      {isClient ? current : "theme"}
    </button>
  );
}
