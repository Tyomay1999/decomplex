"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";

type BoxKey =
  | "apiServer"
  | "authModule"
  | "vacanciesModule"
  | "applicationsModule"
  | "adminModule"
  | "email";

type Box = {
  key: BoxKey;
};

export default function BackendServiceArchitecture(): JSX.Element {
  const t = useTranslations("backendServices.serviceArchitecture");

  const boxes: ReadonlyArray<Box> = [
    { key: "apiServer" },
    { key: "authModule" },
    { key: "vacanciesModule" },
    { key: "applicationsModule" },
    { key: "adminModule" },
    { key: "email" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
        {t("title")}
      </h2>

      <div className="dc-panel backend-arch-panel">
        <div className="backend-arch-grid">
          {boxes.map((b) => (
            <div key={b.key} className="backend-arch-box">
              {t(`boxes.${b.key}`)}
            </div>
          ))}
        </div>

        <div className="backend-arch-mq">
          <div className="backend-arch-mq-box">{t("mq")}</div>
        </div>

        <div className="backend-arch-stores">
          <div className="backend-arch-store backend-arch-store--pg">{t("stores.postgres")}</div>
          <div className="backend-arch-store backend-arch-store--redis">
            {t("stores.redisCache")}
          </div>
        </div>
      </div>
    </section>
  );
}
