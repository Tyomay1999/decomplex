"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";
import AdminKeyFeatures from "../sections/AdminKeyFeatures";
import AdminTechStack from "../sections/AdminTechStack";
import AdminArchitectureNotes from "../sections/AdminArchitectureNotes";
import AdminRequestFlow from "../sections/AdminRequestFlow";
import PageResources from "../../common/PageResources";
import { PAGE_LINKS } from "../../../config/pageLinks";
// import DeploymentBlock from "../../common/deployment/DeploymentBlock";
// import { createAdminDeploymentData } from "../../../config/deployment/admin";

export default function AdminConsolePage(): JSX.Element {
  const t = useTranslations("adminConsole.page");
  // const deploymentT = useTranslations("adminConsole.deployment");
  const { repo, liveBase, supportsLocalePath } = PAGE_LINKS.admin;
  return (
    <div className="admin-page page-content">
      <div className="mb-12">
        <PageResources liveUrl={liveBase} repoUrl={repo} showDocTrail={supportsLocalePath} />

        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">{t("title")}</h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/*<div className="section-divider" />*/}

      {/*<DeploymentBlock data={createAdminDeploymentData(deploymentT)} />*/}

      <div className="section-divider" />

      <AdminKeyFeatures />

      <div className="section-divider" />

      <AdminTechStack />

      <div className="section-divider" />

      <AdminArchitectureNotes />

      <div className="section-divider" />

      <AdminRequestFlow />
    </div>
  );
}
