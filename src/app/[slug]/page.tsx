import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Home from "@/app/page";
import { PageBanner } from "@/components/common/page-banner";
import {
  AuthContent,
  CartContent,
  CheckoutContent,
  ProductDetailsContent,
  WishlistContent,
} from "@/components/commerce/commerce-pages";
import {
  BlogDetailsContent,
  BlogStandardContent,
  FaqPageContent,
  NotFoundContent,
  ProjectDetailsContent,
  ProjectsContent,
  ServiceDetailsContent,
  ServicesVariantContent,
  TeamDetailsContent,
  TeamPageContent,
  TestimonialsPageContent,
} from "@/components/inner/route-pages";
import { ServicesListSection } from "@/components/inner/services-list";
import { ShopContent } from "@/components/inner/shop-content";
import { automartSlugs, services } from "@/lib/site-data";

export function generateStaticParams() {
  return automartSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  return { title: `${title} | Automart` };
}

export default async function AutomartRoute({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;

  if (["home-two","home-three","home-one-onepage","home-two-onepage","home-three-onepage"].includes(slug)) return <Home/>;
  if (slug === "team") return <TeamPageContent/>;
  if (slug === "team-details") return <TeamDetailsContent/>;
  if (slug === "projects") return <ProjectsContent/>;
  if (slug === "project-details") return <ProjectDetailsContent/>;
  if (slug === "testimonials") return <TestimonialsPageContent/>;
  if (slug === "faq") return <FaqPageContent/>;
  if (slug === "404") return <NotFoundContent/>;
  if (slug === "services-v-1") return <main><PageBanner title="Services V-1"/><ServicesListSection/></main>;
  if (slug === "services-v-2") return <ServicesVariantContent version={2}/>;
  if (slug === "services-v-3") return <ServicesVariantContent version={3}/>;
  if (services.some((service) => service.slug === slug)) return <ServiceDetailsContent slug={slug}/>;
  if (slug === "products") return <main><PageBanner title="Products"/><ShopContent/></main>;
  if (slug === "product-details") return <main><PageBanner title="Product Details"/><Suspense fallback={<div className="route-loading">Loading product…</div>}><ProductDetailsContent/></Suspense></main>;
  if (slug === "cart") return <main><PageBanner title="Cart"/><CartContent/></main>;
  if (slug === "checkout") return <main><PageBanner title="Checkout"/><CheckoutContent/></main>;
  if (slug === "wishlist") return <main><PageBanner title="Wishlist"/><WishlistContent/></main>;
  if (slug === "sign-up") return <main><PageBanner title="Sign Up"/><AuthContent mode="signup"/></main>;
  if (slug === "login") return <main><PageBanner title="Login"/><AuthContent mode="login"/></main>;
  if (slug === "blog-standard") return <BlogStandardContent/>;
  if (slug === "blog-details") return <BlogDetailsContent/>;

  notFound();
}
