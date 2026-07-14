import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { PageShell } from "./components/layout/PageShell";
import { DocumentHead } from "./components/ui/DocumentHead";
import { getRouteMeta } from "./data/routeMetadata";
import { HomePage } from "./pages/HomePage";
import { MethodologyPage } from "./pages/MethodologyPage";
import { ContributePage } from "./pages/ContributePage";
import { ChangelogPage } from "./pages/ChangelogPage";
import { AttributionsPage } from "./pages/AttributionsPage";
import { CorrectionsPage } from "./pages/CorrectionsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import { DisclaimerPage } from "./pages/DisclaimerPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import GazaDossierPage from "./pages/GazaDossierPage";
import LegalTrackerPage from "./pages/LegalTrackerPage";
import LegalCaseDetailPage from "./pages/LegalCaseDetailPage";
import CountriesIndexPage from "./pages/CountriesIndexPage";
import BelgiumPage from "./pages/BelgiumPage";
import InstitutionsIndexPage from "./pages/InstitutionsIndexPage";
import EuropeanUnionPage from "./pages/EuropeanUnionPage";
import OrganizationsPage from "./pages/OrganizationsPage";
import OrganizationDetailPage from "./pages/OrganizationDetailPage";
import ActionHubPage from "./pages/ActionHubPage";
import ActionDetailPage from "./pages/ActionDetailPage";
import EvidenceLibraryPage from "./pages/EvidenceLibraryPage";
import EvidenceDetailPage from "./pages/EvidenceDetailPage";
import PressPage from "./pages/PressPage";
import SourceRegistryPage from "./pages/SourceRegistryPage";
import SourceDetailPage from "./pages/SourceDetailPage";

function RouteMeta() {
  const { pathname } = useLocation();
  const meta = getRouteMeta(pathname);

  return (
    <DocumentHead
      title={meta.title}
      description={meta.description}
      canonicalPath={meta.canonicalPath}
      ogImage={meta.ogImage}
      robots={meta.robots}
      ogType={meta.ogType}
    />
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteMeta />
      <ScrollToTop />
      <PageShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/attributions" element={<AttributionsPage />} />
          <Route path="/corrections" element={<CorrectionsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/gaza-dossier" element={<GazaDossierPage />} />
          <Route path="/legal-tracker" element={<LegalTrackerPage />} />
          <Route path="/legal-tracker/:slug" element={<LegalCaseDetailPage />} />
          <Route path="/countries" element={<CountriesIndexPage />} />
          <Route path="/countries/belgium" element={<BelgiumPage />} />
          <Route path="/institutions" element={<InstitutionsIndexPage />} />
          <Route path="/institutions/european-union" element={<EuropeanUnionPage />} />
          <Route path="/organizations" element={<OrganizationsPage />} />
          <Route path="/organizations/:slug" element={<OrganizationDetailPage />} />
          <Route path="/take-action" element={<ActionHubPage />} />
          <Route path="/take-action/:slug" element={<ActionDetailPage />} />
          <Route path="/evidence" element={<EvidenceLibraryPage />} />
          <Route path="/evidence/:slug" element={<EvidenceDetailPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/sources" element={<SourceRegistryPage />} />
          <Route path="/sources/:sourceId" element={<SourceDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  );
}
