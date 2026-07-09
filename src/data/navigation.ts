export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: "Methodology", href: "/methodology" },
  { label: "Contribute", href: "/contribute" },
];

export const githubLink: NavItem = {
  label: "GitHub",
  href: "https://github.com/nuttyproducer/accountability-atlas",
  external: true,
};
