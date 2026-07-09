import { type ReactNode } from "react";

interface CardProps {
  accent?: "amber" | "clay" | "blue";
  label?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const accentColors: Record<string, string> = {
  amber: "bg-amber",
  clay: "bg-clay",
  blue: "bg-trust",
};

export function Card({
  accent,
  label,
  title,
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        relative bg-bone border border-border rounded-lg
        p-6 lg:p-8
        transition duration-300
        hover:shadow-soft hover:-translate-y-0.5 hover:border-charcoal/20
        ${className}
      `.trim()}
    >
      {accent && (
        <div
          className={`absolute top-0 left-0 w-[3px] h-6 rounded-br-sm ${accentColors[accent]}`}
          aria-hidden="true"
        />
      )}
      <div className={accent ? "pl-1" : ""}>
        {label && (
          <p className="font-mono text-xs font-medium text-charcoal/60 mb-2 tracking-wider">
            {label}
          </p>
        )}
        <h3 className="font-serif text-xl lg:text-2xl font-semibold text-ink mb-3">
          {title}
        </h3>
        <p className="text-charcoal leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
