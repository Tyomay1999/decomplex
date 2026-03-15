"use client";

import type { JSX } from "react";
import { useTranslations } from "next-intl";
import MobileKeyFeatures from "../sections/MobileKeyFeatures";
import MobileTechStack from "../sections/MobileTechStack";
import MobileArchitectureNotes from "../sections/MobileArchitectureNotes";
import MobileDataFlow from "../sections/MobileDataFlow";
import PageResources from "../../common/PageResources";
// import DeploymentBlock from "../../common/deployment/DeploymentBlock";
import { PAGE_LINKS } from "../../../config/pageLinks";
// import { createMobileDeploymentData } from "../../../config/deployment/mobile";

export default function MobileSdkPage(): JSX.Element {
  const t = useTranslations("mobileSdk.page");
  // const deploymentT = useTranslations("mobileSdk.deployment");
  const { repo, liveBase, supportsLocalePath, apkPath } = PAGE_LINKS.mobile;

  return (
    <div className="mobile-page page-content">
      <div className="mb-12">
        <PageResources
          liveUrl={liveBase}
          repoUrl={repo}
          showDocTrail={supportsLocalePath}
          apkUrl={apkPath}
        />

        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">{t("title")}</h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/*<div className="section-divider" />*/}

      {/*<DeploymentBlock data={createMobileDeploymentData(deploymentT)} />*/}

      <div className="section-divider" />

      <MobileKeyFeatures />

      <div className="section-divider" />

      <MobileTechStack />

      <div className="section-divider" />

      <MobileArchitectureNotes />

      <div className="section-divider" />

      <MobileDataFlow />
    </div>
  );
}
