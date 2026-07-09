import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { Button, ExternalIcon } from "../ui/Button";

export function ContributorCTA() {
  return (
    <section className="py-24 lg:py-32 bg-bone" aria-labelledby="cta-title">
      <Container>
        <Reveal amount={0.15}>
          <div className="max-w-2xl mx-auto text-center">
            <h2
              id="cta-title"
              className="font-serif text-3xl lg:text-4xl font-semibold text-ink mb-6"
            >
              Help build the foundation.
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-10 max-w-xl mx-auto">
              We are looking for careful contributors: developers, designers,
              researchers, legal and human-rights reviewers, security
              reviewers, writers, translators, and civic-tech contributors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="https://github.com/nuttyproducer/accountability-atlas/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
                variant="primary"
                icon={<ExternalIcon />}
                external
              >
                View Good First Issues
              </Button>
              <Button
                href="https://github.com/nuttyproducer/accountability-atlas/blob/main/CONTRIBUTING.md"
                variant="secondary"
                icon={<ExternalIcon />}
                external
              >
                Read the Contribution Guide
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
