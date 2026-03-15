"use client";

import type { JSX } from "react";
import { useTranslations } from "next-intl";

type Tone = "emerald" | "blue" | "purple" | "slate";
type ControlKey = "envSecrets" | "rbac" | "containerIsolation" | "testGates";

type Control = {
  key: ControlKey;
  tone: Tone;
  icon: JSX.Element;
};

function IconShieldCheck(): JSX.Element {
  return (
    <svg className="dc-icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function IconLock(): JSX.Element {
  return (
    <svg className="dc-icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

function IconCube(): JSX.Element {
  return (
    <svg className="dc-icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 16V8a2 2 0 00-1-1.732l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.732l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.27 6.96L12 12l8.73-5.04"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22V12" />
    </svg>
  );
}

function IconCheckList(): JSX.Element {
  return (
    <svg className="dc-icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 11l3 3L22 4M2 7h7M2 12h7M2 17h7"
      />
    </svg>
  );
}

export default function SecurityComplianceSection(): JSX.Element {
  const t = useTranslations("infrastructure.securityCompliance");

  const items: ReadonlyArray<Control> = [
    { key: "envSecrets", tone: "emerald", icon: <IconLock /> },
    { key: "rbac", tone: "blue", icon: <IconShieldCheck /> },
    { key: "containerIsolation", tone: "purple", icon: <IconCube /> },
    { key: "testGates", tone: "slate", icon: <IconCheckList /> },
  ];

  return (
    <section className="dc-section">
      <h2 className="dc-h2 dc-mb-6">{t("title")}</h2>

      <div className="dc-grid dc-grid-3 mt-6">
        {items.map((x) => (
          <article key={x.key} className="dc-compliance-card">
            <div className={`dc-compliance-icon dc-compliance-icon--${x.tone}`}>{x.icon}</div>
            <h3 className="dc-compliance-title">{t(`items.${x.key}.title`)}</h3>
            <p className="dc-compliance-text">{t(`items.${x.key}.description`)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
