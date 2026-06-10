import { useTranslation } from 'react-i18next'
import WaveDivider from '../components/WaveDivider'

export default function CompanyProfile() {
  const { t } = useTranslation()
  const panels = t('about.panels', { returnObjects: true })

  return (
    <section className="company-page">
      <div className="section-header">
        <p className="eyebrow">{t('about.eyebrow')}</p>
        <h1>{t('about.title')}</h1>
        <p>{t('about.description')}</p>
      </div>

      <WaveDivider className="section-divider invert" />

      <div className="content-grid">
        {panels.map((panel, idx) => (
          <div key={idx} className="content-panel">
            <h2>{panel.title}</h2>
            {panel.content && <p>{panel.content}</p>}
            {panel.items && (
              <ul>
                {panel.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
