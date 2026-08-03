import type { Metadata } from "next";
import { Onest, Rubik } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteEffects } from "@/components/home/interactive";
import { CommerceProvider } from "@/components/commerce/commerce-provider";
import "./globals.css";

const onest = Onest({ subsets: ["latin"], variable: "--font-onest" });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata: Metadata = {
  metadataBase: new URL("https://apvmechanics.com.au"),
  title: "APV Mobile Mechanics | Expert Car Repair & Care Center",
  description: "Professional car repair, maintenance, diagnostics and automotive care from trusted technicians.",
  icons: { icon: "/assets/images/resources/apv-mobile-mechanics-logo.jpeg" },
  openGraph: {
    title: "APV Mobile Mechanics | Expert Car Repair & Care Center",
    description: "Professional repairs and dependable automotive care.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "APV Mobile Mechanics expert car care center" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["AutoRepair", "LocalBusiness"],
      "@id": "https://apvmechanics.com.au/#business",
      "name": "APV Mobile Mechanics",
      "url": "https://apvmechanics.com.au",
      "email": "apvmobilemechanics@gmail.com",
      "telephone": "0424 411 375",
      "logo": "https://apvmechanics.com.au/assets/images/resources/apv-mobile-mechanics-logo.jpeg",
      "image": "https://apvmechanics.com.au/assets/images/resources/apv-mobile-mechanics-logo.jpeg",
      "hasMap": "https://maps.app.goo.gl/dvreoSEMYhGPaky5A?g_st=aw",
      "sameAs": ["https://maps.app.goo.gl/dvreoSEMYhGPaky5A?g_st=aw"],
      "priceRange": "$$",
      "openingHours": "Sa-Th 08:00-20:00",
      "description": "Professional mobile car repair, engine diagnostics, brake repair, battery replacement, and emergency roadside assistance.",
    },
    {
      "@type": "Organization",
      "@id": "https://apvmechanics.com.au/#organization",
      "name": "APV Mobile Mechanics",
      "url": "https://apvmechanics.com.au",
      "email": "apvmobilemechanics@gmail.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "0424 411 375",
        "email": "apvmobilemechanics@gmail.com",
        "contactType": "customer service",
        "availableLanguage": "English",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${onest.variable} ${rubik.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CommerceProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <SiteEffects />
        </CommerceProvider>
      </body>
    </html>
  );
}
