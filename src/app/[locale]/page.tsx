import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import OverviewPage from "@/components/overview/pages/OverviewPage";
import { buildPageMetadata, resolveLocale } from "@/lib/seo";
import { absoluteUrl } from "@/lib/url";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const payload = await params;
  const locale = resolveLocale(payload);

  const tSeo = await getTranslations({ locale, namespace: "seo" });

  return buildPageMetadata({
    locale,
    pathname: "/",
    title: tSeo("title"),
    description: tSeo("description"),
  });
}

export default async function Page({ params }: Props) {
  const payload = await params;
  const locale = resolveLocale(payload);

  const tSeo = await getTranslations({ locale, namespace: "seo" });

  const description = tSeo("description");

  const pageUrl = absoluteUrl(`/${locale}`);

  const websiteSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DeComplex",
    url: pageUrl,
    inLanguage: locale,
  };

  const appSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DeComplex",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    url: pageUrl,
    description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([websiteSchema, appSchema]),
        }}
      />
      <OverviewPage />
    </>
  );
}
