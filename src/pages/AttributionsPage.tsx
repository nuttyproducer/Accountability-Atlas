import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Badge } from "../components/ui/Badge";
import { Button, ArrowIcon } from "../components/ui/Button";
import { PageIntro } from "../components/pages/PageIntro";
import { PageStatusNotice } from "../components/pages/PageStatusNotice";
import { PolicySection } from "../components/pages/PolicySection";
import { LastUpdated } from "../components/pages/LastUpdated";
import { ExternalLink } from "../components/ui/ExternalLink";

interface ImageCredit {
  title: string;
  author: string;
  source: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
  whereUsed: string;
  modifications: string;
  dateAdded: string;
}

const imageCredits: ImageCredit[] = [
  {
    title: "Destruction of Gaza 1.jpg",
    author: "gloucester2gaza",
    source: "Flickr / Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Destruction_of_Gaza_1.jpg",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    whereUsed: "Starting Focus section",
    modifications:
      "Cropped, compressed, dark overlay applied in UI",
    dateAdded: "2026-07-08",
  },
  {
    title: "Hero image — Gaza displacement",
    author: "TODO: Confirm source, author, license, and attribution for the hero image before public beta release.",
    source: "TODO",
    sourceUrl: "TODO",
    license: "TODO",
    licenseUrl: "TODO",
    whereUsed: "Hero section",
    modifications: "Cropped, compressed, overlay applied, converted to WebP",
    dateAdded: "2026-07-07",
  },
];

export function AttributionsPage() {
  return (
    <div className="py-24 lg:py-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <PageIntro
            eyebrow="Attributions"
            title="Attributions and image credits."
            description="Accountability Atlas uses open-licensed or permission-cleared visual materials only when they support public understanding without sensationalism. This page records image credits, licenses, modifications, and where materials are used."
          />

          <PageStatusNotice label="Active" variant="info">
            <p>
              This page is actively maintained. If an attribution is incomplete
              or inaccurate, please submit a correction through the{" "}
              <Link
                to="/corrections"
                className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
              >
                correction process
              </Link>
              .
            </p>
          </PageStatusNotice>

          {/* Image credits */}
          <PolicySection title="Current image credits" id="image-credits" delay={0.15}>
            <p>
              Every image used on the site is listed below with its source,
              license, and modification history.
            </p>
          </PolicySection>

          {imageCredits.map((credit, i) => (
            <Reveal key={i} delay={0.18 + i * 0.06}>
              <div className="bg-bone border border-border rounded-lg p-6 lg:p-8 mb-6">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <h3 className="font-serif text-xl font-semibold text-ink">
                    {credit.title}
                  </h3>
                  {credit.author.startsWith("TODO") ? (
                    <Badge variant="warning">Needs verification</Badge>
                  ) : (
                    <Badge variant="info">Attributed</Badge>
                  )}
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  <div>
                    <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-0.5">
                      Author
                    </dt>
                    <dd className="text-charcoal/80">{credit.author}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-0.5">
                      Source
                    </dt>
                    <dd className="text-charcoal/80">{credit.source}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-0.5">
                      License
                    </dt>
                    <dd className="text-charcoal/80">
                      {credit.licenseUrl !== "TODO" ? (
                        <ExternalLink href={credit.licenseUrl} showIcon={false}>
                          {credit.license}
                        </ExternalLink>
                      ) : (
                        credit.license
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-0.5">
                      Where used
                    </dt>
                    <dd className="text-charcoal/80">{credit.whereUsed}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-0.5">
                      Modifications
                    </dt>
                    <dd className="text-charcoal/80">{credit.modifications}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-0.5">
                      Date added
                    </dt>
                    <dd className="text-charcoal/80">{credit.dateAdded}</dd>
                  </div>
                </dl>

                {credit.sourceUrl !== "TODO" && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <ExternalLink href={credit.sourceUrl}>
                      View source
                    </ExternalLink>
                  </div>
                )}
              </div>
            </Reveal>
          ))}

          {/* Additional assets */}
          <PolicySection title="Other assets" id="other-assets" delay={0.30}>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-clay mt-1.5" aria-hidden="true">•</span>
                <span>
                  <strong>Logo and wordmark</strong> — original work created for
                  Accountability Atlas. Licensed under CC BY-SA 4.0.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-clay mt-1.5" aria-hidden="true">•</span>
                <span>
                  <strong>Grid pattern texture</strong> — original SVG created for
                  Accountability Atlas. Licensed under CC BY-SA 4.0.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-clay mt-1.5" aria-hidden="true">•</span>
                <span>
                  <strong>Typography</strong> — IBM Plex Serif, IBM Plex Mono, and
                  Inter are open-source fonts available via Google Fonts under the
                  SIL Open Font License.
                </span>
              </li>
            </ul>
          </PolicySection>

          {/* Report issues */}
          <PolicySection title="Report an attribution issue" id="report" delay={0.33}>
            <p>
              If an attribution is incomplete, incorrect, or missing, please let
              us know through the{" "}
              <Link
                to="/corrections"
                className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
              >
                corrections process
              </Link>{" "}
              or open an issue on{" "}
              <ExternalLink href="https://github.com/nuttyproducer/accountability-atlas/issues">
                GitHub
              </ExternalLink>
              .
            </p>
          </PolicySection>

          {/* Links */}
          <Reveal delay={0.36}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border mt-10">
              <Button href="/" variant="ghost" icon={<ArrowIcon />}>
                Back home
              </Button>
            </div>
          </Reveal>

          <LastUpdated date="2026-07-10" />
        </div>
      </Container>
    </div>
  );
}
