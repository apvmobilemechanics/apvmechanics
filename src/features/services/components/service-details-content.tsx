import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Gauge, Phone, Wrench } from "lucide-react";
import { PageBanner } from "@/components/common/page-banner";
import { SectionHeading } from "@/components/common/section-heading";
import { LocalContactForm } from "@/components/forms/contact-form";
import { services } from "@/features/services/data/services.data";
import type { ServiceContent } from "@/types/service.types";
import { PHONE } from "@/constants";

export function ServiceDetailsContent({ slug }: { slug: string }) {
  const service: ServiceContent = services.find((item) => item.slug === slug) ?? services[0];

  return (
    <main>
      <PageBanner title={service.h1 ?? service.title} />
      <section className="section detail-section service-detail">
        <div className="container service-detail-grid">
          <article>
            <div className="service-detail-image">
              <Image src={service.image} alt={service.title} fill priority sizes="820px" />
            </div>
            <span className="detail-eyebrow">PROFESSIONAL AUTOMOTIVE SERVICE</span>
            <h2>{service.h1 ?? `${service.title} You Can Depend On`}</h2>
            <p>
              {service.intro ??
                "Our technicians combine accurate diagnostics, workshop-grade equipment and proven repair methods to restore safety and performance."}
            </p>

            {service.features && service.features.length > 0 && (
              <div className="detail-checks">
                {service.features.map((item: string) => (
                  <span key={item}>
                    <Check />
                    {item}
                  </span>
                ))}
              </div>
            )}

            {service.localNote && (
              <p className="service-local-note">
                <strong>Local Note:</strong> {service.localNote}
              </p>
            )}

            {service.process && service.process.length > 0 && (
              <div className="service-benefits">
                <div>
                  <Gauge />
                  <span>
                    <b>Our Process</b>
                    <small>Step by step how we work.</small>
                  </span>
                </div>
                <div>
                  <Wrench />
                  <span>
                    <b>Expert Workmanship</b>
                    <small>Repairs follow a careful, repeatable process.</small>
                  </span>
                </div>
              </div>
            )}

            {service.faqs && service.faqs.length > 0 && (
              <div className="service-faqs">
                <h3>Frequently Asked Questions</h3>
                {service.faqs.map((faq) => (
                  <details key={faq.q} className="service-faq-item">
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            )}

            {service.cta && (
              <div className="service-cta-box">
                <p>{service.cta}</p>
                <a href={`tel:${PHONE.replace(/\s+/g, "")}`} className="primary-action">
                  Call {PHONE} <ArrowRight />
                </a>
              </div>
            )}
          </article>
          <aside>
            <h3>Our Services</h3>
            {services.map((item) => (
              <Link
                className={item.slug === service.slug ? "active" : ""}
                href={`/${item.slug}`}
                key={item.slug}
              >
                {item.title}
                <ArrowRight />
              </Link>
            ))}
            <div className="service-help">
              <Phone />
              <h3>Need Emergency Help?</h3>
              <p>Speak directly with our service team.</p>
              <a href={`tel:${PHONE.replace(/\s+/g, "")}`}>{PHONE}</a>
            </div>
          </aside>
        </div>
      </section>
      <section className="section quote-section">
        <div className="container">
          <SectionHeading
            eyebrow="BOOK A SERVICE"
            title={<>Let&apos;s Get Your Car <em>Back on the Road</em></>}
          />
          <LocalContactForm compact />
        </div>
      </section>
    </main>
  );
}
