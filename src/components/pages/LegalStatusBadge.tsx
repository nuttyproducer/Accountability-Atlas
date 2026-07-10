import { Badge } from "../ui/Badge";
import type { LegalStatus } from "../../types/content";
import { LEGAL_STATUS_LABELS } from "../../types/content";

interface LegalStatusBadgeProps {
  status: LegalStatus;
  className?: string;
}

const variantMap: Record<LegalStatus, "neutral" | "info" | "warning" | "alert"> = {
  court_proceeding_active: "info",
  provisional_measures_issued: "warning",
  arrest_warrant_issued: "alert",
  allegation_under_investigation: "warning",
  un_finding: "info",
  ngo_legal_determination: "info",
  not_judicially_determined: "neutral",
  contested_claim: "warning",
  requires_further_verification: "warning",
};

export function LegalStatusBadge({ status, className = "" }: LegalStatusBadgeProps) {
  return (
    <Badge variant={variantMap[status]} className={className}>
      {LEGAL_STATUS_LABELS[status]}
    </Badge>
  );
}
