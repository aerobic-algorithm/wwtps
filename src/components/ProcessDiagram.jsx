import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'
import { treatmentStages } from '../data/process'

export default function ProcessDiagram() {
  const { t } = useTranslation()
  const [activeId, setActiveId] = useState(null)
  const stages = t('process.stages', { returnObjects: true })

  const activeStage = activeId ? stages?.[activeId] : null

  function handleSelect(id) {
    setActiveId((prev) => (prev === id ? null : id))
  }

  return (
    <AnimatedSection className="process-diagram">
      <h2 className="process-diagram-title">{t('process.title')}</h2>
      <p className="process-diagram-subtitle">{t('process.subtitle')}</p>

      <div className="process-flow" role="list" aria-label="Treatment process stages">
        {treatmentStages.map((stage, idx) => {
          const Icon = stage.icon
          const label = stages?.[stage.id]?.label || stage.id
          const isActive = activeId === stage.id

          return (
            <div key={stage.id} className="process-node-wrapper" role="listitem">
              <button
                className={`process-node${isActive ? ' active' : ''}`}
                onClick={() => handleSelect(stage.id)}
                aria-expanded={isActive}
                aria-label={label}
              >
                <span className="process-node-step">{idx + 1}</span>
                <span className="process-node-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="process-node-label">{label}</span>
              </button>
              {idx < treatmentStages.length - 1 && (
                <span className="process-arrow" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              )}
            </div>
          )
        })}
      </div>

      <div className="process-detail" role="region" aria-live="polite">
        {activeStage ? (
          <div className="process-detail-card">
            {(() => {
              const Icon = treatmentStages.find((s) => s.id === activeId)?.icon
              return Icon ? (
                <span className="process-detail-icon" aria-hidden="true"><Icon /></span>
              ) : null
            })()}
            <h3>{activeStage.label}</h3>
            <p className="process-detail-desc">{activeStage.description}</p>
            <p className="process-detail-body">{activeStage.details}</p>
          </div>
        ) : (
          <p className="process-detail-hint">{t('process.hint')}</p>
        )}
      </div>
    </AnimatedSection>
  )
}
