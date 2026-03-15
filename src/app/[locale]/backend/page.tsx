import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BackendServicesPage from "@/components/backend/pages/BackendServicesPage";
import { buildPageMetadata, resolveLocale } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const payload = await params;
  const locale = resolveLocale(payload);

  const t = await getTranslations({ locale });

  return buildPageMetadata({
    locale,
    pathname: "/backend",
    title: t("backendServices.page.title"),
    description: t("backendServices.page.description"),
  });
}

export default function Page() {
  return <BackendServicesPage />;
}
