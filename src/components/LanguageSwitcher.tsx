"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, defaultLocale, isLocale } from "@/i18n/routing";
import { env } from "@/lib/env";

function withBasePath(path: string): string {
  const bp = env.BASE_PATH ?? "";
  return bp ? `${bp}${path}` : path;
}

function stripBasePath(pathname: string): string {
  const bp = env.BASE_PATH ?? "";
  if (!bp) return pathname;
  return pathname.startsWith(bp) ? pathname.slice(bp.length) || "/" : pathname;
}

function getLocaleFromPath(pathname: string): (typeof locales)[number] {
  const m = pathname.match(/^\/([^/]+)(?:\/|$)/);
  const raw = m?.[1] ?? defaultLocale;
  return isLocale(raw) ? raw : defaultLocale;
}

function getSuffix(pathname: string, currentLocale: string): string {
  const re = new RegExp(`^/${currentLocale}(?=/|$)`);
  const suffix = pathname.replace(re, "");
  return suffix.length > 0 ? suffix : "/";
}

export function LanguageSwitcher() {
  const router = useRouter();
  const pathnameRaw = usePathname() || "/";
  const pathname = stripBasePath(pathnameRaw);

  const current = useMemo(() => getLocaleFromPath(pathname), [pathname]);
  const suffix = useMemo(() => getSuffix(pathname, current), [pathname, current]);

  return (
    <div className="flex overflow-hidden rounded-xl border border-slate-300 dark:border-slate-700">
      {locales.map((l) => {
        const active = l === current;
        return (
          <button
            key={l}
            type="button"
            onClick={() => {
              if (active) return;
              router.push(withBasePath(`/${l}${suffix}`));
            }}
            className={[
              "px-3 py-2 text-xs font-semibold uppercase",
              active
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-200",
            ].join(" ")}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
