interface LastUpdatedProps {
  date: string;
}

export function LastUpdated({ date }: LastUpdatedProps) {
  return (
    <p className="font-mono text-xs text-charcoal/40 mt-12 pt-6 border-t border-border">
      Last updated: {date}
    </p>
  );
}
