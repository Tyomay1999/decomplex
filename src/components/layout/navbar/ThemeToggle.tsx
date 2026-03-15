"use client";

import type { JSX } from "react";
import { useCallback, useMemo } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useIsMounted } from "@/hooks/useIsMounted";

type ThemeMode = "light" | "dark";

function IconSun(): JSX.Element {
  return (
    <svg className="dc-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414m0-11.314 1.414 1.414M16.95 16.95l1.414 1.414"
      />
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
      />
    </svg>
  );
}

function IconMoon(): JSX.Element {
  return (
    <svg className="dc-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      />
    </svg>
  );
}

export function ThemeToggle(): JSX.Element {
  const isMounted = useIsMounted();
  const t = useTranslations("preferences");
  const { resolvedTheme, setTheme } = useTheme();

  const current = useMemo<ThemeMode>(
    () => (resolvedTheme === "dark" ? "dark" : "light"),
    [resolvedTheme],
  );

  const next: ThemeMode = current === "dark" ? "light" : "dark";

  const onToggle = useCallback(() => {
    setTheme(next);
  }, [setTheme, next]);

  if (!isMounted) {
    return (
      <button type="button" className="dc-toggle" aria-pressed={false} title="Theme" disabled>
        <IconSun />
        <span className="dc-toggle__label">{t("theme")}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className="dc-toggle"
      aria-pressed={current === "dark"}
      title={`Switch to ${next}`}
    >
      {current === "dark" ? <IconMoon /> : <IconSun />}
      <span className="dc-toggle__label">{current === "dark" ? t("dark") : t("light")}</span>
    </button>
  );
}
