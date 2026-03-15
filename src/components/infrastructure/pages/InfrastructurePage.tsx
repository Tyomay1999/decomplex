"use client";
import type { JSX } from "react";
// import { useTranslations } from "next-intl";
import InfrastructureHeader from "../sections/InfrastructureHeader";
import DeploymentModelSection from "../sections/DeploymentModelSection";
import TechnologyStackSection from "../sections/TechnologyStackSection";
import InfrastructureLayersSection from "../sections/InfrastructureLayersSection";
import SecurityComplianceSection from "../sections/SecurityComplianceSection";
import PageResources from "../../common/PageResources";
import { PAGE_LINKS } from "../../../config/pageLinks";
// import DeploymentBlock from "../../common/deployment/DeploymentBlock";
// import { createInfrastructureDeploymentData } from "../../../config/deployment/infrastructure";

export default function InfrastructurePage(): JSX.Element {
  // const deploymentT = useTranslations("infrastructure.deployment");

  return (
    <div className="dc-page-content dc-infrastructure-page">
      <div className="dc-mb-12">
        <PageResources repoUrl={PAGE_LINKS.infrastructure.repo} />
        <InfrastructureHeader />
      </div>

      {/*<div className="section-divider" />*/}

      {/*<DeploymentBlock data={createInfrastructureDeploymentData(deploymentT)} />*/}

      <div className="section-divider" />

      <DeploymentModelSection />

      <div className="dc-section-divider" />

      <TechnologyStackSection />

      <div className="dc-section-divider" />

      <InfrastructureLayersSection />

      <div className="dc-section-divider" />

      <SecurityComplianceSection />
    </div>
  );
}
