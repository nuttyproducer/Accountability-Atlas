import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageShell } from "./components/layout/PageShell";
import { HomePage } from "./pages/HomePage";
import { MethodologyPage } from "./pages/MethodologyPage";
import { ContributePage } from "./pages/ContributePage";

export default function App() {
  return (
    <BrowserRouter>
      <PageShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/contribute" element={<ContributePage />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  );
}
