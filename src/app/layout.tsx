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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${onest.variable} ${rubik.variable}`}><body><CommerceProvider><SiteHeader />{children}<SiteFooter /><SiteEffects /></CommerceProvider></body></html>;
}
