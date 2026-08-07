import { SectionHeading } from "@/components/common/section-heading";
import { TestimonialCard } from "@/components/cards/testimonial-card";

const testimonialsData = [
  { name: "Laura Brown", place: "New York, USA", imageIndex: 1 },
  { name: "William Foster", place: "Chicago, USA", imageIndex: 2 },
];

export function TestimonialsSection({ inner = false }: { inner?: boolean }) {
  return (
    <section className={`section testimonials ${inner ? "inner-testimonials" : ""}`}>
      <div className="container">
        <SectionHeading eyebrow="OUR TESTIMONIALS" title={<>About Our Customers <em>Feedback Says</em></>} center />
        <div className="testimonial-grid">
          {testimonialsData.map(({ name, place, imageIndex }) => (
            <TestimonialCard
              key={name}
              name={name}
              place={place}
              imageIndex={imageIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Testimonials = TestimonialsSection;
