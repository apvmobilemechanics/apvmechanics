export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: string;
  title: string;
  image: string;
  iconLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  features: string[];
  process: string[];
  localNote?: string;
  faqs: ServiceFaq[];
  cta: string;
}
