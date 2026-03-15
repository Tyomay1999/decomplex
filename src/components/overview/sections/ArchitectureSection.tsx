"use client";

import type { JSX } from "react";
import { useTranslations } from "next-intl";

export default function ArchitectureSection(): JSX.Element {
  const t = useTranslations("overview.architecture");

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-[var(--dc-text)] mb-8">{t("title")}</h2>

      <div className="bg-[var(--dc-surface)] rounded-xl border border-[var(--dc-border)] p-8 overflow-hidden">
        <div className="architecture-diagram-desktop relative min-h-[480px]">
          <div className="flex justify-center gap-6 mb-8">
            <div className="diagram-box w-36">
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-600 dark:text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-[var(--dc-text)]">{t("inputs.webApp")}</span>
              </div>
            </div>

            <div className="diagram-box w-40">
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-600 dark:text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-[var(--dc-text)]">{t("inputs.adminConsole")}</span>
              </div>
            </div>

            <div className="diagram-box w-36">
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-600 dark:text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-[var(--dc-text)]">{t("inputs.mobileSdk")}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <svg className="w-64 h-8 text-[var(--dc-border)]" viewBox="0 0 256 32">
              <path
                d="M64 0 L64 16 L128 16 M192 0 L192 16 L128 16 M128 0 L128 32"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="flex justify-center mb-4">
            <div className="bg-[var(--dc-surface-muted)] rounded-xl border-2 border-[var(--dc-border)] p-6 w-[480px]">
              <div className="text-center mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--dc-text-soft)]">
                  {t("corePlatform")}
                </span>
              </div>

              <div className="bg-[var(--dc-surface)] rounded-lg border border-[var(--dc-border)] p-4 mb-4">
                <div className="text-center text-sm font-semibold text-[var(--dc-text)] mb-3">
                  {t("processingEngine")}
                </div>
                <div className="flex justify-center gap-3">
                  <div className="px-3 py-2 rounded-md text-xs font-medium border text-blue-700 border-blue-100 bg-blue-50 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-200">
                    {t("processingPills.eventProcessing")}
                  </div>
                  <div className="px-3 py-2 rounded-md text-xs font-medium border text-blue-700 border-blue-100 bg-blue-50 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-200">
                    {t("processingPills.stateManagement")}
                  </div>
                  <div className="px-3 py-2 rounded-md text-xs font-medium border text-blue-700 border-blue-100 bg-blue-50 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-200">
                    {t("processingPills.orchestration")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <svg className="w-64 h-8 text-[var(--dc-border)]" viewBox="0 0 256 32">
              <path
                d="M128 0 L128 16 L64 16 L64 32 M128 16 L192 16 L192 32"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <div className="diagram-box w-36">
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 text-emerald-600 dark:text-emerald-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-[var(--dc-text)]">{t("outputs.apiServices")}</span>
              </div>
            </div>

            <div className="diagram-box w-36">
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 text-emerald-600 dark:text-emerald-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
                <span className="text-[var(--dc-text)]">{t("outputs.dataLayer")}</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-[var(--dc-surface-muted)] rounded-xl p-5 border border-[var(--dc-border)]">
              <div className="text-center mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--dc-text-soft)]">
                  {t("infrastructureFoundation")}
                </span>
              </div>

              <div className="flex justify-center gap-4 flex-wrap">
                {[
                  {
                    key: "compute",
                    path: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                  },
                  {
                    key: "storage",
                    path: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
                  },
                  {
                    key: "network",
                    path: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                  },
                  {
                    key: "security",
                    path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center gap-2 px-4 py-2 bg-[var(--dc-surface)] rounded-lg border border-[var(--dc-border)]"
                  >
                    <svg
                      className="w-4 h-4 text-[var(--dc-text-soft)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={item.path}
                      />
                    </svg>
                    <span className="text-sm font-medium text-[var(--dc-text-muted)]">
                      {t(`infrastructure.${item.key}` as const)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="architecture-diagram-mobile">
          <div className="diagram-box">
            <svg
              className="w-4 h-4 text-blue-600 dark:text-blue-300 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {t("inputs.webApp")}
          </div>

          <div className="mobile-arrow">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          <div className="diagram-box">
            <svg
              className="w-4 h-4 text-blue-600 dark:text-blue-300 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {t("inputs.adminConsole")}
          </div>

          <div className="mobile-arrow">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          <div className="diagram-box">
            <svg
              className="w-4 h-4 text-blue-600 dark:text-blue-300 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            {t("inputs.mobileSdk")}
          </div>

          <div className="mobile-arrow">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          <div className="processing-engine bg-[var(--dc-surface-muted)] rounded-xl border-2 border-[var(--dc-border)] p-6">
            <div className="text-center mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--dc-text-soft)]">
                {t("corePlatform")}
              </span>
            </div>

            <div className="bg-[var(--dc-surface)] rounded-lg border border-[var(--dc-border)] p-4">
              <div className="text-center text-sm font-semibold text-[var(--dc-text)] mb-3">
                {t("processingEngine")}
              </div>
              <div className="flex flex-col gap-2">
                <div className="px-3 py-2 rounded-md text-xs font-medium border text-blue-700 border-blue-100 bg-blue-50 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-200 text-center">
                  {t("processingPills.eventProcessing")}
                </div>
                <div className="px-3 py-2 rounded-md text-xs font-medium border text-blue-700 border-blue-100 bg-blue-50 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-200 text-center">
                  {t("processingPills.stateManagement")}
                </div>
                <div className="px-3 py-2 rounded-md text-xs font-medium border text-blue-700 border-blue-100 bg-blue-50 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-200 text-center">
                  {t("processingPills.orchestration")}
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-arrow">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          <div className="diagram-box">
            <svg
              className="w-4 h-4 text-emerald-600 dark:text-emerald-300 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {t("outputs.apiServices")}
          </div>

          <div className="mobile-arrow">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          <div className="diagram-box">
            <svg
              className="w-4 h-4 text-emerald-600 dark:text-emerald-300 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
              />
            </svg>
            {t("outputs.dataLayer")}
          </div>

          <div className="mobile-arrow">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          <div className="infrastructure bg-[var(--dc-surface-muted)] rounded-xl p-5 border border-[var(--dc-border)]">
            <div className="text-center mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--dc-text-soft)]">
                {t("infrastructureFoundation")}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {[
                {
                  key: "compute",
                  path: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                },
                {
                  key: "storage",
                  path: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
                },
                {
                  key: "network",
                  path: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                },
                {
                  key: "security",
                  path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--dc-surface)] rounded-lg border border-[var(--dc-border)]"
                >
                  <svg
                    className="w-4 h-4 text-[var(--dc-text-soft)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={item.path}
                    />
                  </svg>
                  <span className="text-sm font-medium text-[var(--dc-text-muted)]">
                    {t(`infrastructure.${item.key}` as const)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
