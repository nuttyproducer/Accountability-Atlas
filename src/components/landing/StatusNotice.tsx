export function StatusNotice() {
  return (
    <section aria-label="Project status">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="bg-amber/5 border-l-2 border-amber py-6 px-5 rounded-r-md">
          <p className="font-mono text-xs font-medium tracking-wider text-charcoal/60 uppercase mb-2">
            Project Status
          </p>
          <p className="text-base text-charcoal leading-relaxed">
            Early-stage open-source initiative. Not yet a registered NGO,
            charity, legal entity, or formal partner of any listed
            organization.
          </p>
        </div>
      </div>
    </section>
  );
}
