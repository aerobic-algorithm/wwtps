import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'

export default function ProjectTimeline({ items }) {
  const { t } = useTranslation()
  const sorted = [...items].sort((a, b) => a.year - b.year)

  return (
    <AnimatedSection className="project-timeline">
      <p className="eyebrow">{t('gallery.eyebrow')}</p>
      <h2 className="project-timeline-heading">{t('gallery.title')}</h2>
      <div className="timeline">
        {sorted.map((item, idx) => (
          <div
            key={item.id}
            className={`timeline-item${idx % 2 === 0 ? ' left' : ' right'}`}
          >
            <div className="timeline-marker">
              <span className="timeline-year">{item.year}</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-media">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="timeline-card-body">
                <h3>{item.title}</h3>
                <p className="timeline-location">{item.location}</p>
                <p className="timeline-summary">{item.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
