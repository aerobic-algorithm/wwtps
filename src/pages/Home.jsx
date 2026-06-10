import { HiOutlineSparkles, HiOutlineRocketLaunch, HiOutlineShieldCheck } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import ServiceCard from '../components/ServiceCard'
import CTAButton from '../components/CTAButton'
import WaveDivider from '../components/WaveDivider'
import AnimatedSection from '../components/AnimatedSection'
import { services } from '../data/services'

export default function Home() {
  const { t } = useTranslation()
  const translatedServices = t('services.items', { returnObjects: true })

  return (
    <section className="home-page">
      <Seo title="Home" description={t('home.description')} path="/" />

      <div className="hero-panel">
        <AnimatedSection className="hero-copy" fadeUp={false}>
          <p className="eyebrow">{t('home.eyebrow')}</p>
          <h1>{t('home.title')}</h1>
          <p className="hero-text">{t('home.description')}</p>
          <div className="hero-actions">
            <CTAButton>{t('home.cta')}</CTAButton>
          </div>
        </AnimatedSection>
        <AnimatedSection className="hero-panel__card">
          <div className="hero-card">
            <p className="tag">{t('home.tagline')}</p>
            <h2>{t('home.taglineTitle')}</h2>
            <p>{t('home.taglineDescription')}</p>
          </div>
        </AnimatedSection>
      </div>

      <WaveDivider className="section-divider" />

      <AnimatedSection as="section" className="feature-grid">
        <div className="feature-copy">
          <p className="eyebrow">{t('home.featureEyebrow')}</p>
          <h2>{t('home.featureTitle')}</h2>
          <p>{t('home.featureDescription')}</p>
        </div>
        <div className="service-tiles">
          {services.slice(0, 4).map((service, idx) => (
            <AnimatedSection key={service.title} style={{ animationDelay: `${idx * 0.1}s` }}>
              <ServiceCard
                {...service}
                title={translatedServices[idx]?.title || service.title}
                description={translatedServices[idx]?.description || service.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="value-row">
        {t('home.valueCards', { returnObjects: true }).map((card, idx) => (
          <AnimatedSection key={idx} style={{ animationDelay: `${idx * 0.12}s` }}>
            <div className="value-card">
              {idx === 0 && <HiOutlineSparkles className="value-icon" />}
              {idx === 1 && <HiOutlineRocketLaunch className="value-icon" />}
              {idx === 2 && <HiOutlineShieldCheck className="value-icon" />}
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </AnimatedSection>
    </section>
  )
}
