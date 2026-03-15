import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import InfrastructurePage from "@/components/infrastructure/pages/InfrastructurePage";
import { buildPageMetadata, resolveLocale } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const payload = await params;
  const locale = resolveLocale(payload);

  const t = await getTranslations({ locale });

  return buildPageMetadata({
    locale,
    pathname: "/infrastructure",
    title: t("infrastructure.header.title"),
    description: t("infrastructure.header.lead"),
  });
}

export default function Page() {
  return <InfrastructurePage />;
}
