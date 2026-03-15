import type { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/url";

export const dynamic = "force-static";

const paths = ["", "/web", "/mobile-app", "/backend", "/admin", "/infrastructure"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-02-01");

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: absoluteUrl(`/${locale}${path}`),
      lastModified,
      changeFrequency: "monthly",
      priority: locale === defaultLocale && path === "" ? 1 : 0.8,
    })),
  );
}
