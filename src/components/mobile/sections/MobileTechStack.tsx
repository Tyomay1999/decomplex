"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";

type Tech = { label: string };

export default function MobileTechStack(): JSX.Element {
  const t = useTranslations("mobileSdk.techStack");

  const tech: ReadonlyArray<Tech> = [
    { label: "React Native" },
    { label: "Expo" },
    { label: "React Navigation" },
    { label: "TypeScript" },
    { label: "RTK Query" },
    { label: "i18next" },
    { label: "AsyncStorage" },
    { label: "Expo SecureStore" },
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
