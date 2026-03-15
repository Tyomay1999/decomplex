import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AdminConsolePage from "@/components/admin/pages/AdminConsolePage";
import { buildPageMetadata, resolveLocale } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const payload = await params;
  const locale = resolveLocale(payload);

  const t = await getTranslations({ locale });

  return buildPageMetadata({
    locale,
    pathname: "/admin",
    title: t("adminConsole.page.title"),
    description: t("adminConsole.page.description"),
  });
}

export default function Page() {
  return <AdminConsolePage />;
}
