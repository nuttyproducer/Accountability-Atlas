import { Link } from "react-router-dom";
import logoMark from "../../assets/logo-mark.svg";

const footerLinks = [
  { label: "Methodology", href: "/methodology" },
  { label: "Contribute", href: "/contribute" },
  {
    label: "GitHub",
    href: "https://github.com/nuttyproducer/accountability-atlas",
    external: true,
  },
  {
    label: "Security",
    href: "https://github.com/nuttyproducer/accountability-atlas/blob/main/SECURITY.md",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-bone/70" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoMark}
                alt=""
                className="w-6 h-6 flex-shrink-0 opacity-80"
                aria-hidden="true"
              />
              <div>
                <span className="font-serif text-lg font-semibold text-bone/90 leading-tight block">
                  Accountability Atlas
                </span>
                <span className="font-mono text-[10px] font-medium tracking-[0.15em] text-bone/50 uppercase">
                  Civic Evidence Platform
                </span>
              </div>
            </div>
          </div>

          {/* Links column */}
          <nav aria-label="Footer navigation">
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-bone/70 hover:text-bone transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-bone/70 hover:text-bone transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="border-bone/20 mb-8" aria-hidden="true" />

        <div className="space-y-3 text-sm">
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
          <p>
            This project does not provide legal advice. This is not a
            registered NGO or charity. No partnership with listed
            organizations is implied.
          </p>
          <p className="font-mono text-xs text-bone/50 pt-4">
            &copy; {new Date().getFullYear()} Accountability Atlas contributors.
          </p>
        </div>
      </div>
    </footer>
  );
}
