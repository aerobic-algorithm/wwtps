import { useTranslation } from 'react-i18next'
import WaveDivider from '../components/WaveDivider'
import AnimatedSection from '../components/AnimatedSection'

export default function CompanyProfile() {
  const { t } = useTranslation()
  const panels = t('about.panels', { returnObjects: true })

  return (
    <section className="company-page">
      <AnimatedSection className="section-header">
        <p className="eyebrow">{t('about.eyebrow')}</p>
        <h1>{t('about.title')}</h1>
        <p>{t('about.description')}</p>
      </AnimatedSection>

      <WaveDivider className="section-divider invert" />

      <div className="content-grid">
        {panels.map((panel, idx) => (
          <AnimatedSection key={idx} className="content-panel" style={{ animationDelay: `${idx * 0.1}s` }}>
            <h2>{panel.title}</h2>
            {panel.content && <p>{panel.content}</p>}
            {panel.items && (
              <ul>
                {panel.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
