import { Link } from "react-router-dom";
import logoMark from "../../assets/logo-mark.svg";

const projectLinks = [
  { label: "Methodology", href: "/methodology" },
  { label: "Contribute", href: "/contribute" },
  { label: "Changelog", href: "/changelog" },
];

const resourceLinks = [
  {
    label: "GitHub Repository",
    href: "https://github.com/nuttyproducer/accountability-atlas",
    external: true,
  },
  {
    label: "Security Policy",
    href: "https://github.com/nuttyproducer/accountability-atlas/blob/main/SECURITY.md",
    external: true,
  },
  {
    label: "Image Credits",
    href: "https://github.com/nuttyproducer/accountability-atlas/blob/main/docs/attributions.md",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-bone/70" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Top grid: brand + link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoMark}
                alt=""
                className="w-9 h-9 flex-shrink-0 opacity-90"
                aria-hidden="true"
              />
              <div>
                <span className="font-serif text-xl font-semibold text-bone/90 leading-tight block">
                  Accountability Atlas
                </span>
                <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-bone/50 uppercase">
                  Civic Accountability Platform
                </span>
              </div>
            </div>
            <p className="text-base text-bone/60 leading-relaxed mt-4 max-w-xs">
              Evidence for protection. Action for accountability.
            </p>
          </div>

          {/* Project links */}
          <div>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-bone/40 mb-4">
              Project
            </h3>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-base text-bone/70 hover:text-bone transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-bone/40 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-bone/70 hover:text-bone transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-bone/20 mb-8" aria-hidden="true" />

        {/* Legal + disclaimers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-3 text-base text-bone/60 leading-relaxed">
            <p>
              Code licensed under{" "}
              <a
                href="https://github.com/nuttyproducer/accountability-atlas/blob/main/LICENSE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/80 hover:text-bone underline underline-offset-2 transition-colors duration-200"
              >
                AGPL-3.0-or-later
              </a>
              . Content licensed under{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/80 hover:text-bone underline underline-offset-2 transition-colors duration-200"
              >
                CC BY-SA 4.0
              </a>
              .
            </p>
          </div>
          <div className="space-y-3 text-base text-bone/60 leading-relaxed">
            <p>
              This project does not provide legal advice. This is not a
              registered NGO or charity. No partnership with listed
              organizations is implied.
            </p>
          </div>
        </div>

        <p className="font-mono text-sm text-bone/40 pt-10">
          &copy; {new Date().getFullYear()} Accountability Atlas contributors.
        </p>
      </div>
    </footer>
  );
}
