"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

function SunIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0-1.414-1.414M7.05 7.05 5.636 5.636M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12.8A8.5 8.5 0 0 1 11.2 3a6.9 6.9 0 1 0 9.8 9.8Z"
      />
    </svg>
  );
}

export function DesktopPrefsMenu() {
  const locale = useLocale();
  const t = useTranslations("preferences");
  const label = useMemo(() => locale.toUpperCase(), [locale]);

  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.documentElement;

    const sync = () => setIsDark(el.classList.contains("dark"));
    sync();

    const obs = new MutationObserver(sync);
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });

    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onPointerDown = (e: MouseEvent) => {
      const node = wrapRef.current;
      if (!node) return;
      if (!node.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="dc-prefs-btn"
      >
        <span className="dc-prefs-btn__left">{label}</span>
        <span className="dc-prefs-btn__right">{isDark ? <MoonIcon /> : <SunIcon />}</span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label="Preferences"
          className="absolute right-0 mt-2 w-[240px] rounded-2xl border border-gray-200 bg-white shadow-lg dark:bg-slate-900 dark:border-slate-700 overflow-hidden"
        >
          <div className="px-3 py-2 border-b border-gray-200 dark:border-slate-700">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {t("title")}
            </div>
          </div>

          <div className="p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                {t("language")}
              </div>
              <LanguageSwitcher />
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                {t("theme")}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
