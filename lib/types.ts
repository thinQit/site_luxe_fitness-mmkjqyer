export interface CTA {
  label: string;
  href: string;
}

export interface BaseSection {
  id: string;
  type: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  content?: Record<string, unknown>;
}

export interface PageBlueprint {
  path: string;
  name: string;
  sections: BaseSection[];
}

export interface SiteBlueprint {
  projectName: string;
  displayName: string;
  tagline: string;
  pages: PageBlueprint[];
}

export interface NavLink {
  label: string;
  href: string;
}
