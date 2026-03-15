"use client";

import type { JSX } from "react";
import { useTranslations } from "next-intl";

type Tone = "blue" | "emerald" | "purple" | "slate";

type LayerKey = "edge" | "runtime" | "application" | "data" | "delivery";

type Layer = {
  key: LayerKey;
  tone: Tone;
  pillKeys: ReadonlyArray<string>;
};

export default function InfrastructureLayersSection(): JSX.Element {
  const t = useTranslations("infrastructure.layers");

  const layers: ReadonlyArray<Layer> = [
    {
      key: "edge",
      tone: "blue",
      pillKeys: ["nginx", "reverseProxy", "loadBalancing"],
    },
    {
      key: "runtime",
      tone: "emerald",
      pillKeys: ["docker", "dockerCompose", "serviceNetworking"],
    },
    {
      key: "application",
      tone: "purple",
      pillKeys: ["webApp", "adminConsole", "mobileApp", "backendApi"],
    },
    {
      key: "data",
      tone: "slate",
      pillKeys: ["postgres", "redis", "rabbitmqOptional"],
    },
    {
      key: "delivery",
      tone: "slate",
      pillKeys: ["ciPipeline", "testGates", "prodImages"],
    },
  ];

  return (
    <section className="dc-section dc-mb-12">
      <h2 className="dc-h2 dc-mb-6">{t("title")}</h2>

      <div className="dc-surface">
        <div className="dc-layers">
          {layers.map((l) => (
            <div key={l.key} className={`dc-layer dc-layer--${l.tone}`}>
              <div className="dc-layer__title">{t(`items.${l.key}.title`)}</div>

              <div className="dc-layer__items">
                {l.pillKeys.map((pillKey) => (
                  <span key={pillKey} className="dc-pill">
                    {t(`items.${l.key}.pills.${pillKey}`)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
