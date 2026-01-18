import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { locales, defaultLocale } from "@/i18n/routing";

function withBasePath(path: string): string {
  const bp = env.BASE_PATH ?? "";
  return bp ? `${bp}${path}` : path;
}

function abs(path: string): string {
  return new URL(withBasePath(path), env.SITE_URL).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.map((locale) => ({
    url: abs(`/${locale}/`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: locale === defaultLocale ? 1 : 0.8,
  }));
}
