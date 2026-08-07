import { TestimonialCard } from "@/components/cards/testimonial-card";
import { SectionHeading } from "@/components/common/section-heading";

const cards = [
  { name: "Laura Brown", place: "New York, USA", avatarIndex: 1 },
  { name: "William Foster", place: "Chicago, USA", avatarIndex: 2 },
];

export function HomeTestimonialsSection() {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHeading eyebrow="OUR TESTIMONIALS" title={<>About Our Customers <em>Feedback Says</em></>} center />
        <div className="testimonial-grid">
          {cards.map(({ name, place, avatarIndex }) => (
            <TestimonialCard
              key={name}
              name={name}
              place={place}
              avatarIndex={avatarIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
