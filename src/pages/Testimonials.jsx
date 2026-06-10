import { useTranslation } from 'react-i18next'

export default function Testimonials() {
  const { t } = useTranslation()
  const items = t('testimonials.items', { returnObjects: true })

  return (
    <section className="testimonials-page">
      <div className="section-header">
        <p className="eyebrow">{t('testimonials.eyebrow')}</p>
        <h1>{t('testimonials.title')}</h1>
        <p>{t('testimonials.description')}</p>
      </div>
      <div className="testimonial-grid">
        {items.map((item) => (
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
