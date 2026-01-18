import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "./routing";
import type { Locale } from "./routing";

type Messages = Record<string, unknown>;
type MessagesModule = { default: Messages };

const loaders: Record<Locale, () => Promise<MessagesModule>> = {
  en: () => import("./messages/en.json"),
  ru: () => import("./messages/ru.json"),
  hy: () => import("./messages/hy.json"),
};

export default getRequestConfig(async ({ locale }) => {
  const safeLocale: Locale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  const mod = await loaders[safeLocale]();

  return { locale: safeLocale, timeZone: "UTC", messages: mod.default };
});
