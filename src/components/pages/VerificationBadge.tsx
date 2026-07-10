import { Badge } from "../ui/Badge";
import type { VerificationLevel } from "../../types/content";
import { VERIFICATION_LEVEL_LABELS } from "../../types/content";

interface VerificationBadgeProps {
  level: VerificationLevel;
  showPrefix?: boolean;
  className?: string;
}

const variantMap: Record<VerificationLevel, "neutral" | "info" | "warning" | "alert"> = {
  0: "warning",
  1: "warning",
  2: "neutral",
  3: "info",
  4: "info",
  5: "info",
};

export function VerificationBadge({
  level,
  showPrefix = true,
  className = "",
}: VerificationBadgeProps) {
  const label = VERIFICATION_LEVEL_LABELS[level];
  const display = showPrefix ? `Level ${level} — ${label}` : label;

  return (
    <Badge variant={variantMap[level]} className={className}>
      {display}
    </Badge>
  );
}
