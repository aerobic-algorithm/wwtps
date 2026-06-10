import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import AnimatedSection from '../components/AnimatedSection'
import TestimonialCarousel from '../components/TestimonialCarousel'

export default function Testimonials() {
  const { t } = useTranslation()
  const items = t('testimonials.items', { returnObjects: true })

  return (
    <section className="testimonials-page">
      <Seo title="Testimonials" description={t('testimonials.description')} path="/testimonials" />

      <AnimatedSection className="section-header">
        <p className="eyebrow">{t('testimonials.eyebrow')}</p>
        <h1>{t('testimonials.title')}</h1>
        <p>{t('testimonials.description')}</p>
      </AnimatedSection>
      <AnimatedSection>
        <TestimonialCarousel items={items} />
      </AnimatedSection>
    </section>
  )
}
