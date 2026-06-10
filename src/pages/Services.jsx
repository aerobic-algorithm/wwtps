import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import ServiceCard from '../components/ServiceCard'
import AnimatedSection from '../components/AnimatedSection'
import CategoryFilter from '../components/CategoryFilter'
import Accordion from '../components/Accordion'
import { services, serviceCategories } from '../data/services'
import { faq } from '../data/faq'

export default function Services() {
  const { t } = useTranslation()
  const translatedServices = t('services.items', { returnObjects: true })
  const [activeCategory, setActiveCategory] = useState(null)

  const filtered = activeCategory
    ? services.filter((s) => s.category === activeCategory)
    : services

  return (
    <section className="services-page">
      <Seo title="Services" description={t('services.description')} path="/services" />

      <AnimatedSection className="section-header">
        <p className="eyebrow">{t('services.eyebrow')}</p>
        <h1>{t('services.title')}</h1>
        <p>{t('services.description')}</p>
      </AnimatedSection>

      <CategoryFilter categories={serviceCategories} active={activeCategory} onChange={setActiveCategory} />

      <div className="services-grid">
        {filtered.map((service, idx) => (
          <AnimatedSection key={service.title} style={{ animationDelay: `${idx * 0.08}s` }}>
            <ServiceCard
              {...service}
              title={translatedServices[idx]?.title || service.title}
              description={translatedServices[idx]?.description || service.description}
            />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="faq-section">
        <h2 className="faq-heading">Frequently asked questions</h2>
        <Accordion items={faq} />
      </AnimatedSection>
    </section>
  )
}
