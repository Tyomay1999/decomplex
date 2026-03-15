"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";

type NoteKey = "expoCrossPlatform" | "stateAndApi" | "localization" | "testingCoverage";

type Note = {
  key: NoteKey;
};

export default function MobileArchitectureNotes(): JSX.Element {
  const t = useTranslations("mobileSdk.architectureNotes");

  const notes: ReadonlyArray<Note> = [
    { key: "expoCrossPlatform" },
    { key: "stateAndApi" },
    { key: "localization" },
    { key: "testingCoverage" },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
        {t("title")}
      </h2>

      <div className="dc-panel">
        <ul className="space-y-4">
          {notes.map((n) => (
            <li key={n.key} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
              <div>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {t(`items.${n.key}.title`)}
                </span>{" "}
                <span className="text-slate-600 dark:text-slate-300">
                  {t(`items.${n.key}.description`)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
