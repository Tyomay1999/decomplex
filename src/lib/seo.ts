import type { Metadata } from "next";
import { defaultLocale, isLocale, locales } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import { env } from "@/lib/env";
import { absoluteUrl } from "@/lib/url";

export type SeoParams = { locale: string };

function toOgLocale(locale: Locale): string {
  if (locale === "en") return "en_US";
  if (locale === "ru") return "ru_RU";
  return "hy_AM";
}

function localePath(locale: Locale, pathname: string): string {
  return pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
}

function buildOgAlternateLocales(active: Locale): string[] {
  const all = locales.map((l) => toOgLocale(l));
  const current = toOgLocale(active);
  return all.filter((x) => x !== current);
}

function pickLocale(raw: string): Locale {
  return isLocale(raw) ? raw : defaultLocale;
}

function buildLanguageAlternates(pathname: string): Record<string, string> {
  const entries: Array<[string, string]> = locales.map((l) => [
    l,
    absoluteUrl(localePath(l, pathname)),
  ]);
  return Object.fromEntries(entries);
}

export function resolveLocale(params: SeoParams): Locale {
  return pickLocale(params.locale);
}

export function buildPageMetadata(opts: {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
}): Metadata {
  const { locale, pathname, title, description } = opts;

  const canonical = absoluteUrl(localePath(locale, pathname));

  const ogImage = absoluteUrl("/og/og-home-1200x630.png");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...buildLanguageAlternates(pathname),
        "x-default": absoluteUrl(localePath(defaultLocale, pathname)),
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: env.SITE_NAME,
      locale: toOgLocale(locale),
      alternateLocale: buildOgAlternateLocales(locale),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
