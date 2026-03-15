"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";

type FeatureKey = "roleManagement" | "userManagement" | "vacancyManagement" | "applicationReview";

type Feature = {
  key: FeatureKey;
  icon: JSX.Element;
};

function IconShieldCheck(): JSX.Element {
  return (
    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function IconDashboard(): JSX.Element {
  return (
    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );
}

function IconUsers(): JSX.Element {
  return (
    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}

function IconDocument(): JSX.Element {
  return (
    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

export default function AdminKeyFeatures(): JSX.Element {
  const t = useTranslations("adminConsole.keyFeatures");

  const features: ReadonlyArray<Feature> = [
    { key: "roleManagement", icon: <IconShieldCheck /> },
    { key: "userManagement", icon: <IconDashboard /> },
    { key: "vacancyManagement", icon: <IconUsers /> },
    { key: "applicationReview", icon: <IconDocument /> },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
        {t("title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f) => (
          <div key={f.key} className="dc-card">
            <div className="flex items-start gap-4">
              <div className="admin-icon-wrap">{f.icon}</div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  {t(`items.${f.key}.title`)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {t(`items.${f.key}.description`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
