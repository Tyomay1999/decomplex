import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ClientPage from "./ClientPage";
import type { Locale } from "@/i18n/routing";
import { isLocale, defaultLocale } from "@/i18n/routing";
import { env } from "@/lib/env";

type Params = { locale: string };

type Props = {
  params: Promise<Params>;
};

function withBasePath(path: string): string {
  const bp = env.BASE_PATH ?? "";
  return bp ? `${bp}${path}` : path;
}

function pickLocale(raw: string): Locale {
  return isLocale(raw) ? raw : defaultLocale;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const payload = await params;
  const locale = pickLocale(payload.locale);

  const tSeo = await getTranslations({ locale, namespace: "seo" });

  const title = tSeo("title");
  const description = tSeo("description");

  return {
    title,
    description,
    alternates: {
      canonical: withBasePath(`/${locale}/`),
      languages: {
        en: withBasePath("/en/"),
        ru: withBasePath("/ru/"),
        hy: withBasePath("/hy/"),
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: withBasePath(`/${locale}/`),
      siteName: env.SITE_NAME,
      images: [{ url: withBasePath("/og.png") }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [withBasePath("/og.png")],
    },
  };
}

export default function Page() {
  return <ClientPage />;
}
