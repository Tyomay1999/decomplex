import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import MobileSdkPage from "@/components/mobile/pages/MobileSdkPage";
import { buildPageMetadata, resolveLocale } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const payload = await params;
  const locale = resolveLocale(payload);

  const t = await getTranslations({ locale });

  return buildPageMetadata({
    locale,
    pathname: "/mobile-app",
    title: t("mobileSdk.page.title"),
    description: t("mobileSdk.page.description"),
  });
}

export default function Page() {
  return <MobileSdkPage />;
}
