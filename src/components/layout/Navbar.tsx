"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import { ThemeToggle } from "./navbar/ThemeToggle";
import { LanguageSwitcher } from "./navbar/LanguageSwitcher";
import { DesktopPrefsMenu } from "./navbar/DesktopPrefsMenu";

type NavItem = { id: string; label: string; href: string };

function stripLocale(pathname: string, locale: string): string {
  const prefix = `/${locale}`;
  if (pathname === prefix) return "/";
  return pathname.startsWith(prefix + "/") ? pathname.slice(prefix.length) : pathname;
}

function toLocaleHref(locale: string, href: string): string {
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname() ?? "/";
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const navItems: ReadonlyArray<NavItem> = useMemo(
    () => [
      { id: "overview", label: t("overview"), href: "/" },
      { id: "web", label: t("web"), href: "/web" },
      { id: "admin", label: t("admin"), href: "/admin" },
      { id: "mobile", label: t("mobile"), href: "/mobile" },
      { id: "backend", label: t("backend"), href: "/backend" },
      { id: "infra", label: t("infra"), href: "/infrastructure" },
    ],
    [t],
  );

  const pathNoLocale = useMemo(() => stripLocale(pathname, locale), [pathname, locale]);

  const isActive = (href: string): boolean => {
    if (href === "/") return pathNoLocale === "/";
    return pathNoLocale === href || pathNoLocale.startsWith(href + "/");
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 dark:bg-slate-900 dark:border-slate-700 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="h-16 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center dark:bg-slate-700">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                DeComplex
              </span>
              <span className="dc-brand-badge">Docs</span>
            </div>
          </div>

          <nav className="hidden min-[860px]:flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const href = toLocaleHref(locale, item.href);

              return (
                <Link
                  key={item.id}
                  href={href}
                  className={`nav-link text-sm font-medium hover:text-slate-900 dark:hover:text-white ${
                    active
                      ? "active text-slate-900 dark:text-white"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden min-[860px]:flex items-center">
            <DesktopPrefsMenu />
          </div>

          <div className="min-[860px]:hidden flex items-center">
            <button
              type="button"
              aria-label="Toggle navigation"
              className="p-2"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                className="w-6 h-6 text-slate-700 dark:text-slate-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {open ? (
            <button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/30"
            />
          ) : null}

          <div
            className={`md:hidden fixed top-16 left-0 right-0 z-50 ${
              open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
            } transition`}
          >
            <div className="mx-4 rounded-2xl border border-gray-200 bg-white shadow-lg dark:bg-slate-900 dark:border-slate-700 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-slate-700">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>

              <nav className="flex flex-col py-1">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  const href = toLocaleHref(locale, item.href);

                  return (
                    <Link
                      key={item.id}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`nav-link px-4 py-3 text-sm font-medium hover:text-slate-900 dark:hover:text-white ${
                        active
                          ? "active text-slate-900 dark:text-white"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
