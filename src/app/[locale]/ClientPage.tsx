"use client";

import { useTranslations } from "next-intl";

export default function ClientPage() {
  const t = useTranslations("page");
  return <div>{t("home")}</div>;
}
