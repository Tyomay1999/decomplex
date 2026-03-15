"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";
import WebAppKeyFeatures from "../sections/WebAppKeyFeatures";
import WebAppTechStack from "../sections/WebAppTechStack";
import WebAppArchitectureNotes from "../sections/WebAppArchitectureNotes";
import WebAppRequestFlow from "../sections/WebAppRequestFlow";
import PageResources from "../../common/PageResources";
import { PAGE_LINKS } from "../../../config/pageLinks";
// import DeploymentBlock from "../../common/deployment/DeploymentBlock";
// import { createWebDeploymentData } from "../../../config/deployment/web";

export default function WebAppPage(): JSX.Element {
  const t = useTranslations("webApp.page");
  // const deploymentT = useTranslations("webApp.deployment");
  const { repo, liveBase, supportsLocalePath } = PAGE_LINKS.web;
  return (
    <div className="webApp-page page-content">
      <div className="mb-12">
        <PageResources liveUrl={liveBase} repoUrl={repo} showDocTrail={supportsLocalePath} />

        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">{t("title")}</h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/*<div className="section-divider" />*/}

      {/*<DeploymentBlock data={createWebDeploymentData(deploymentT)} />*/}

      <div className="section-divider" />

      <WebAppKeyFeatures />

      <div className="section-divider" />

      <WebAppTechStack />

      <div className="section-divider" />

      <WebAppArchitectureNotes />

      <div className="section-divider" />

      <WebAppRequestFlow />
    </div>
  );
}
