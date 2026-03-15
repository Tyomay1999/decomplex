"use client";

import type { JSX } from "react";
import { useTranslations } from "next-intl";

type StackKey =
  | "docker"
  | "dockerCompose"
  | "nginx"
  | "postgres"
  | "redis"
  | "rabbitmqOptional"
  | "ci"
  | "playwright"
  | "jest"
  | "vitest";

type StackItem = {
  key: StackKey;
};

export default function TechnologyStackSection(): JSX.Element {
  const t = useTranslations("infrastructure.technologyStack");

  const stack: ReadonlyArray<StackItem> = [
    { key: "docker" },
    { key: "dockerCompose" },
    { key: "nginx" },
    { key: "postgres" },
    { key: "redis" },
    { key: "rabbitmqOptional" },
    { key: "ci" },
    { key: "playwright" },
    { key: "jest" },
    { key: "vitest" },
  ];

  return (
    <section className="dc-section dc-mb-12">
      <h2 className="dc-h2 dc-mb-6">{t("title")}</h2>

      <div className="dc-badges">
        {stack.map((x) => (
          <span key={x.key} className="dc-tech-badge">
            {t(`items.${x.key}`)}
          </span>
        ))}
      </div>
    </section>
  );
}
