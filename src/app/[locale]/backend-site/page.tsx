"use client";

import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("page");
  return <div>{t("backend")}</div>;
}
