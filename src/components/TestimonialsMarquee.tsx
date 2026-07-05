import type { Testimonial } from "@/data/brand";

function splitTestimonials(testimonials: Testimonial[]) {
  const midpoint = Math.ceil(testimonials.length / 2);
  return [testimonials.slice(0, midpoint), testimonials.slice(midpoint)];
}

export function TestimonialsMarquee({ testimonials }: { testimonials: Testimonial[] }) {
  const [firstRow, secondRow] = splitTestimonials(testimonials);

  return (
    <div className="testimonial-marquee" aria-label="Depoimentos reais da Ótica Moderna">
      <ul className="sr-only">
        {testimonials.map((testimonial) => (
          <li key={testimonial.name}>
            {testimonial.name}: {testimonial.text} Origem: {testimonial.source}.
          </li>
        ))}
      </ul>
      <MarqueeRow testimonials={firstRow} />
      <MarqueeRow testimonials={secondRow} reverse />
    </div>
  );
}

function MarqueeRow({ testimonials, reverse = false }: { testimonials: Testimonial[]; reverse?: boolean }) {
  return (
    <div className={`testimonial-row${reverse ? " is-reverse" : ""}`} aria-hidden="true">
      <div className="testimonial-track">
        <div className="testimonial-set">
          {testimonials.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.name} />
          ))}
        </div>
        <div className="testimonial-set" aria-hidden="true">
          {testimonials.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={`${testimonial.name}-duplicate`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="testimonial-card">
      <span>★★★★★</span>
      <p>{testimonial.text}</p>
      <strong>{testimonial.name}</strong>
      <small>{testimonial.source}</small>
    </article>
  );
}