import { HiOutlineSparkles, HiOutlineRocketLaunch, HiOutlineShieldCheck } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'
import ServiceCard from '../components/ServiceCard'
import CTAButton from '../components/CTAButton'
import WaveDivider from '../components/WaveDivider'
import { services } from '../data/services'

export default function Home() {
  const { t } = useTranslation()
  const translatedServices = t('services.items', { returnObjects: true })

  return (
    <section className="home-page">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">{t('home.eyebrow')}</p>
          <h1>{t('home.title')}</h1>
          <p className="hero-text">{t('home.description')}</p>
          <div className="hero-actions">
            <CTAButton>{t('home.cta')}</CTAButton>
          </div>
        </div>
        <div className="hero-panel__card">
          <div className="hero-card">
            <p className="tag">{t('home.tagline')}</p>
            <h2>{t('home.taglineTitle')}</h2>
            <p>{t('home.taglineDescription')}</p>
          </div>
        </div>
      </div>

      <WaveDivider className="section-divider" />

      <section className="feature-grid">
        <div className="feature-copy">
          <p className="eyebrow">{t('home.featureEyebrow')}</p>
          <h2>{t('home.featureTitle')}</h2>
          <p>{t('home.featureDescription')}</p>
        </div>
        <div className="service-tiles">
          {services.slice(0, 4).map((service, idx) => (
            <ServiceCard
              key={service.title}
              {...service}
              title={translatedServices[idx]?.title || service.title}
              description={translatedServices[idx]?.description || service.description}
            />
          ))}
        </div>
      </section>

      <section className="value-row">
        {t('home.valueCards', { returnObjects: true }).map((card, idx) => (
          <div key={idx} className="value-card">
            {idx === 0 && <HiOutlineSparkles className="value-icon" />}
            {idx === 1 && <HiOutlineRocketLaunch className="value-icon" />}
            {idx === 2 && <HiOutlineShieldCheck className="value-icon" />}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </section>
    </section>
  )
}
