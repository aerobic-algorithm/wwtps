import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section className="testimonials-page">
      <div className="section-header">
        <p className="eyebrow">Testimonials</p>
        <h1>Client feedback from operating teams and engineering partners.</h1>
        <p>
          These case highlights describe the impact of rapid troubleshooting,
          commissioning support, and process optimization work.
        </p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial-card">
            <p className="testimonial-copy">{item.quote}</p>
            <p className="testimonial-author">
              {item.name}, {item.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
