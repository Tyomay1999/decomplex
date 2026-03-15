"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";

type Tech = { label: string };

export default function WebAppTechStack(): JSX.Element {
  const t = useTranslations("webApp.techStack");

  const tech: ReadonlyArray<Tech> = [
    { label: "Next.js" },
    { label: "React" },
    { label: "TypeScript" },
    { label: "RTK Query" },
    { label: "Tailwind CSS" },
    { label: "next-intl" },
    { label: "next-themes" },
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
