import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import WebAppPage from "@/components/webapp/pages/WebAppPage";
import { buildPageMetadata, resolveLocale } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const payload = await params;
  const locale = resolveLocale(payload);

  const t = await getTranslations({ locale });

  return buildPageMetadata({
    locale,
    pathname: "/web",
    title: t("webApp.page.title"),
    description: t("webApp.page.description"),
  });
}

export default function Page() {
  return <WebAppPage />;
}
