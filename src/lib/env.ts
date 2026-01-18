import { defaultLocale, isLocale, locales } from "@/i18n/routing";

function normalizeBaseUrl(url: string): string {
  return url.replace(/\/+$/, "");
}

function required(name: string, value: string | undefined): string {
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function optional(value: string | undefined): string | undefined {
  return value || undefined;
}

function parseBool(value: string | undefined): boolean | undefined {
  if (!value) return undefined;
  const v = value.trim().toLowerCase();
  if (v === "true") return true;
  if (v === "false") return false;
  throw new Error(`Invalid boolean environment variable value: ${value}`);
}

// function parseIntSafe(value: string | undefined): number | undefined {
//     if (!value) return undefined;
//     const n = Number(value);
//     if (!Number.isFinite(n) || !Number.isInteger(n)) {
//         throw new Error(`Invalid integer environment variable value: ${value}`);
//     }
//     return n;
// }

function parseLocale(value: string | undefined): (typeof locales)[number] | undefined {
  if (!value) return undefined;
  const v = value.trim().toLowerCase();
  if (isLocale(v)) return v;
  throw new Error(`Invalid locale environment variable value: ${value}`);
}

const isProd = process.env.NODE_ENV === "production";

export const env = {
  SITE_URL: normalizeBaseUrl(
    isProd
      ? required("NEXT_PUBLIC_SITE_URL", process.env.NEXT_PUBLIC_SITE_URL)
      : (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  ),

  SITE_NAME: isProd
    ? required("NEXT_PUBLIC_SITE_NAME", process.env.NEXT_PUBLIC_SITE_NAME)
    : (process.env.NEXT_PUBLIC_SITE_NAME ?? "DeComplex"),

  BASE_PATH: optional(process.env.NEXT_PUBLIC_BASE_PATH)?.replace(/\/+$/, ""),

  DEFAULT_LOCALE: parseLocale(process.env.NEXT_PUBLIC_DEFAULT_LOCALE) ?? defaultLocale,

  ENABLE_BACKEND: parseBool(process.env.NEXT_PUBLIC_ENABLE_BACKEND) ?? false,
};
