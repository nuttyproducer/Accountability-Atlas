import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { PageShell } from "./components/layout/PageShell";
import { HomePage } from "./pages/HomePage";
import { MethodologyPage } from "./pages/MethodologyPage";
import { ContributePage } from "./pages/ContributePage";
import { ChangelogPage } from "./pages/ChangelogPage";

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
      <ScrollToTop />
      <PageShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  );
}
