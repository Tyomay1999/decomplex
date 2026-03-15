"use client";

import type { JSX } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useMemo } from "react";

type FooterLink = { id: string; label: string; href: string; external?: boolean };

function isExternal(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

export default function Footer(): JSX.Element {
  const t = useTranslations("footer");
  const locale = useLocale();

  const resources: FooterLink[] = useMemo(
    () => [
      {
        id: "live",
        label: t("links.live"),
        href: `/${locale}`,
        external: false,
      },
      {
        id: "github",
        label: t("links.github"),
        href: "https://github.com/Tyomay1999",
        external: true,
      },
      {
        id: "api",
        label: t("links.api"),
        href: "https://decomplex-test-api.tyomay.dev/api/docs/",
        external: true,
      },
    ],
    [t, locale],
  );

  return (
    <footer className="dc-footer">
      <div className="dc-footer__container">
        <div className="dc-footer__top">
          <div className="dc-footer__brand">
            <div className="dc-footer__logo">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>

            <div>
              <div className="dc-footer__brand-name">{t("brand.name")}</div>
              <div className="dc-footer__brand-subtitle">{t("brand.subtitle")}</div>
            </div>
          </div>

          <div className="dc-footer__resources" aria-label={t("links.aria")}>
            {resources.map((item) => {
              if (item.external || isExternal(item.href)) {
                return (
                  <a
                    key={item.id}
                    className="dc-footer__link"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link key={item.id} className="dc-footer__link" href={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="dc-footer__divider" />

        <div className="dc-footer__bottom">
          <div className="dc-footer__meta">
            <span>{t("meta.copyright")}</span>
            <span>•</span>
            <span>{t("meta.product")}</span>
            <span>•</span>
            <span>{t("meta.version")}</span>
          </div>

          <div className="dc-footer__updated">{t("meta.updated")}</div>
        </div>
      </div>
    </footer>
  );
}
