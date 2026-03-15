"use client";

import type { JSX, KeyboardEvent } from "react";
import { useMemo, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, defaultLocale, isLocale } from "@/i18n/routing";
import { stripBasePath, withBasePath } from "@/lib/url";

type Locale = (typeof locales)[number];

function getLocaleFromPath(pathname: string): Locale {
  const m = pathname.match(/^\/([^/]+)(?:\/|$)/);
  const raw = m?.[1] ?? defaultLocale;
  return isLocale(raw) ? raw : defaultLocale;
}

function getSuffix(pathname: string, currentLocale: string): string {
  const re = new RegExp(`^/${currentLocale}(?=/|$)`);
  const suffix = pathname.replace(re, "");
  return suffix.length > 0 ? suffix : "/";
}

export function LanguageSwitcher(): JSX.Element {
  const router = useRouter();
  const pathnameRaw = usePathname() || "/";
  const pathname = stripBasePath(pathnameRaw);

  const current = useMemo(() => getLocaleFromPath(pathname), [pathname]);
  const suffix = useMemo(() => getSuffix(pathname, current), [pathname, current]);

  const navigate = useCallback(
    (nextLocale: Locale) => {
      if (nextLocale === current) return;
      router.push(withBasePath(`/${nextLocale}${suffix}`));
    },
    [router, current, suffix],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

      const idx = locales.findIndex((x) => x === current);
      if (idx < 0) return;

      const delta = e.key === "ArrowRight" ? 1 : -1;
      const next = locales[(idx + delta + locales.length) % locales.length];

      e.preventDefault();
      navigate(next);
    },
    [current, navigate],
  );

  return (
    <div className="dc-seg" role="tablist" aria-label="Language" onKeyDown={onKeyDown}>
      {locales.map((l) => {
        const active = l === current;
        return (
          <button
            key={l}
            type="button"
            role="tab"
            aria-selected={active}
            aria-current={active ? "true" : undefined}
            className={`dc-seg__item ${active ? "is-active" : ""}`}
            onClick={() => navigate(l)}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
