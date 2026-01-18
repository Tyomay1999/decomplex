"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { env } from "@/lib/env";

type Props = {
  locale: Locale;
};

function withBasePath(path: string): string {
  const bp = env.BASE_PATH ?? "";
  return bp ? `${bp}${path}` : path;
}

type NavItem = {
  key: "home" | "mobile" | "web" | "backend" | "admin";
  href: (locale: Locale) => string;
};

const items: NavItem[] = [
  { key: "home", href: (l) => `/${l}/` },
  { key: "mobile", href: (l) => `/${l}/mobile-app/` },
  { key: "web", href: (l) => `/${l}/web-app/` },
  { key: "backend", href: (l) => `/${l}/backend-site/` },
  { key: "admin", href: (l) => `/${l}/admin-site/` },
];

function normalizePathname(pathname: string): string {
  const bp = env.BASE_PATH ?? "";
  if (!bp) return pathname;
  return pathname.startsWith(bp) ? pathname.slice(bp.length) || "/" : pathname;
}

function isActivePath(current: string, target: string, isHome: boolean): boolean {
  if (isHome) return current === target;
  return current === target || current.startsWith(target);
}

export function Navbar({ locale }: Props) {
  const t = useTranslations("nav");
  const pathname = normalizePathname(usePathname());

  return (
    <nav aria-label="Primary">
      <ul className="flex flex-wrap items-center gap-2">
        {items.map((item) => {
          const target = item.href(locale);
          const href = withBasePath(target);
          const active = isActivePath(pathname, target, item.key === "home");

          return (
            <li key={item.key}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`ui-control inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm ${
                  active ? "opacity-100" : "opacity-80 hover:opacity-100"
                }`}
              >
                {t(item.key)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
