"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";

export default function InfrastructureHeader(): JSX.Element {
  const t = useTranslations("infrastructure.header");

  return (
    <>
      <h1 className="dc-h1">{t("title")}</h1>
      <p className="dc-lead">{t("lead")}</p>
    </>
  );
}
