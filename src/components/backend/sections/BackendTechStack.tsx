"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";

type Tech = { label: string };

export default function BackendTechStack(): JSX.Element {
  const t = useTranslations("backendServices.techStack");

  const tech: ReadonlyArray<Tech> = [
    { label: "Node.js" },
    { label: "TypeScript" },
    { label: "Express" },
    { label: "REST API" },
    { label: "PostgreSQL" },
    { label: "Sequelize" },
    { label: "Redis" },
    { label: "RabbitMQ" },
    { label: "JWT" },
    { label: "Joi" },
    { label: "Swagger / OpenAPI" },
    { label: "Pino" },
    { label: "Jest" },
    { label: "Supertest" },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
        {t("title")}
      </h2>

      <div className="flex flex-wrap gap-3">
        {tech.map((item) => (
          <span key={item.label} className="tech-badge">
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
