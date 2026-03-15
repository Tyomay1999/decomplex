"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";
import BackendKeyFeatures from "../sections/BackendKeyFeatures";
import BackendTechStack from "../sections/BackendTechStack";
import BackendArchitectureNotes from "../sections/BackendArchitectureNotes";
import BackendServiceArchitecture from "../sections/BackendServiceArchitecture";
import PageResources from "../../common/PageResources";
import { PAGE_LINKS } from "../../../config/pageLinks";
// import DeploymentBlock from "../../common/deployment/DeploymentBlock";
// import { createBackendDeploymentData } from "../../../config/deployment/backend";

export default function BackendServicesPage(): JSX.Element {
  const t = useTranslations("backendServices.page");
  // const deploymentT = useTranslations("backendServices.deployment");
  const { repo, liveBase, supportsLocalePath } = PAGE_LINKS.backend;

  return (
    <div className="backend-page page-content">
      <div className="mb-12">
        <PageResources liveUrl={liveBase} repoUrl={repo} showDocTrail={supportsLocalePath} />

        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">{t("title")}</h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/*<div className="section-divider" />*/}

      {/*<DeploymentBlock data={createBackendDeploymentData(deploymentT)} />*/}

      <div className="section-divider" />

      <BackendKeyFeatures />

      <div className="section-divider" />

      <BackendTechStack />

      <div className="section-divider" />

      <BackendArchitectureNotes />

      <div className="section-divider" />

      <BackendServiceArchitecture />
    </div>
  );
}
