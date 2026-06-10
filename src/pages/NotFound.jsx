import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="notfound-page">
      <div className="section-header">
        <p className="eyebrow">{t('notFound.eyebrow')}</p>
        <h1>{t('notFound.title')}</h1>
        <p>{t('notFound.description')}</p>
        <Link to="/" className="cta-button">
          {t('notFound.cta')}
        </Link>
      </div>
    </section>
  )
}
