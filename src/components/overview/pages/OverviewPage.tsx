import OverviewHero from "../sections/OverviewHero";
import ArchitectureSection from "../sections/ArchitectureSection";
import DocumentationModules from "../sections/DocumentationModules";
import PlatformMetrics from "../sections/PlatformMetrics";

export default function OverviewPage() {
  return (
    <div className="overview-page bg-[var(--dc-bg)]">
      <main className="max-w-7xl mx-auto px-6 py-12 dc-main dc-container">
        <div className="page-content">
          <OverviewHero />
          <ArchitectureSection />
          <DocumentationModules />
          <PlatformMetrics />
        </div>
      </main>
    </div>
  );
}
