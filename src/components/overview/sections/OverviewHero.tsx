"use client";

import type { JSX } from "react";
import { useTranslations } from "next-intl";

export default function OverviewHero(): JSX.Element {
  const t = useTranslations("overview.hero");

  return (
    <div className="mb-12">
      <h1 className="text-4xl font-bold text-[var(--dc-text)] mb-4">{t("title")}</h1>
      <p className="text-lg text-[var(--dc-text-muted)] max-w-3xl leading-relaxed">
        {t("description")}
      </p>
    </div>
  );
}
