import { HiOutlineSparkles, HiOutlineRocketLaunch, HiOutlineShieldCheck } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import ServiceCard from '../components/ServiceCard'
import CTAButton from '../components/CTAButton'
import WaveDivider from '../components/WaveDivider'
import AnimatedSection from '../components/AnimatedSection'
import StatsCounter from '../components/StatsCounter'
import { services } from '../data/services'

function StaggeredHeading({ text }) {
  const words = text.split(' ')
  return (
    <h1 className="staggered-heading">
      {words.map((word, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>{word}{' '}</span>
      ))}
    </h1>
  )
}

export default function Home() {
  const { t } = useTranslation()
  const translatedServices = t('services.items', { returnObjects: true })

  const stats = [
    { end: 10, suffix: '+', label: 'Years experience' },
    { end: 50, suffix: '+', label: 'Projects completed' },
    { end: 5, suffix: '', label: 'Countries served' },
    { end: 24, suffix: '/7', label: 'Support available' },
  ]

  return (
    <section className="home-page">
      <Seo title="Home" description={t('home.description')} path="/" />

      <div className="hero-panel">
        <div className="floating-shapes" aria-hidden="true">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <AnimatedSection className="hero-copy" fadeUp={false}>
          <p className="eyebrow">{t('home.eyebrow')}</p>
          <StaggeredHeading text={t('home.title')} />
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

      <AnimatedSection as="section" className="stats-row" fadeUp={false}>
        {stats.map((stat, idx) => (
          <AnimatedSection key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
            <StatsCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
          </AnimatedSection>
        ))}
      </AnimatedSection>
    </section>
  )
}
