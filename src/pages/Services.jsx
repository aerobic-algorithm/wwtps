import { useTranslation } from 'react-i18next'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  const { t } = useTranslation()
  const translatedServices = t('services.items', { returnObjects: true })

  return (
    <section className="services-page">
      <div className="section-header">
        <p className="eyebrow">{t('services.eyebrow')}</p>
        <h1>{t('services.title')}</h1>
        <p>{t('services.description')}</p>
      </div>
      <div className="services-grid">
        {services.map((service, idx) => (
          <ServiceCard
            key={service.title}
            {...service}
            title={translatedServices[idx]?.title || service.title}
            description={translatedServices[idx]?.description || service.description}
          />
        ))}
      </div>
    </section>
  )
}
