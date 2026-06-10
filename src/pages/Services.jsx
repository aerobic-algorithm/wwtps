import { useTranslation } from 'react-i18next'
import ServiceCard from '../components/ServiceCard'
import AnimatedSection from '../components/AnimatedSection'
import { services } from '../data/services'

export default function Services() {
  const { t } = useTranslation()
  const translatedServices = t('services.items', { returnObjects: true })

  return (
    <section className="services-page">
      <AnimatedSection className="section-header">
        <p className="eyebrow">{t('services.eyebrow')}</p>
        <h1>{t('services.title')}</h1>
        <p>{t('services.description')}</p>
      </AnimatedSection>
      <div className="services-grid">
        {services.map((service, idx) => (
          <AnimatedSection key={service.title} style={{ animationDelay: `${idx * 0.08}s` }}>
            <ServiceCard
              {...service}
              title={translatedServices[idx]?.title || service.title}
              description={translatedServices[idx]?.description || service.description}
            />
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
