import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="notfound-page">
      <Seo title="Page not found" description="The page you are looking for does not exist." />
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
