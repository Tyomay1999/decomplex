"use client";

import type { JSX } from "react";
import { useTranslations } from "next-intl";

type MetricKey = "testCoverage" | "containerization" | "ciPipeline" | "architecture";

type Metric = {
  key: MetricKey;
};

export default function PlatformMetrics(): JSX.Element {
  const t = useTranslations("overview.metrics");

  const metrics: ReadonlyArray<Metric> = [
    { key: "testCoverage" },
    { key: "containerization" },
    { key: "ciPipeline" },
    { key: "architecture" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold text-[var(--dc-text)] mb-8">{t("title")}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {metrics.map((m) => (
          <div key={m.key} className="metric-card">
            <div className="text-sm font-medium text-[var(--dc-text)]">{t(`items.${m.key}`)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
