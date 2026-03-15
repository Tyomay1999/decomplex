"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";

function Arrow(): JSX.Element {
  return (
    <div className="flow-arrow">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </div>
  );
}

function DownArrow(): JSX.Element {
  return (
    <div className="flow-arrow flow-arrow-vertical">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}

export default function MobileDataFlow(): JSX.Element {
  const t = useTranslations("mobileSdk.requestFlow");

  return (
    <section>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
        {t("title")}
      </h2>

      <div className="dc-panel p-8">
        <div className="flow-diagram-horizontal flex items-center gap-4">
          <div className="diagram-box px-6">
            <span className="text-slate-700 dark:text-slate-200">{t("nodes.mobileApp")}</span>
          </div>
          <Arrow />
          <div className="diagram-box px-6">
            <span className="text-slate-700 dark:text-slate-200">{t("nodes.clientState")}</span>
          </div>
          <Arrow />
          <div className="diagram-box px-6">
            <span className="text-slate-700 dark:text-slate-200">{t("nodes.auth")}</span>
          </div>
          <Arrow />
          <div className="diagram-box px-6">
            <span className="text-slate-700 dark:text-slate-200">{t("nodes.vacancies")}</span>
          </div>
          <Arrow />
          <div className="diagram-box px-6">
            <span className="text-slate-700 dark:text-slate-200">{t("nodes.applications")}</span>
          </div>
          <Arrow />
          <div className="diagram-box px-6">
            <span className="text-slate-700 dark:text-slate-200">{t("nodes.apiGateway")}</span>
          </div>
          <Arrow />
          <div className="diagram-box px-6">
            <span className="text-slate-700 dark:text-slate-200">{t("nodes.backendServices")}</span>
          </div>
        </div>

        <div className="flow-diagram-vertical">
          <div className="diagram-box">{t("nodes.mobileApp")}</div>
          <DownArrow />
          <div className="diagram-box">{t("nodes.clientState")}</div>
          <DownArrow />
          <div className="diagram-box">{t("nodes.auth")}</div>
          <DownArrow />
          <div className="diagram-box">{t("nodes.vacancies")}</div>
          <DownArrow />
          <div className="diagram-box">{t("nodes.applications")}</div>
          <DownArrow />
          <div className="diagram-box">{t("nodes.apiGateway")}</div>
          <DownArrow />
          <div className="diagram-box">{t("nodes.backendServices")}</div>
        </div>
      </div>
    </section>
  );
}
