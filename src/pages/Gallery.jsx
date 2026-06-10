import { useTranslation } from 'react-i18next'
import { gallery } from '../data/gallery'

export default function Gallery() {
  const { t } = useTranslation()
  const translatedItems = t('gallery.items', { returnObjects: true })

  return (
    <section className="gallery-page">
      <div className="section-header">
        <p className="eyebrow">{t('gallery.eyebrow')}</p>
        <h1>{t('gallery.title')}</h1>
        <p>{t('gallery.description')}</p>
      </div>

      <div className="gallery-layout container">
        <div className="gallery-grid">
          {gallery.map((item, idx) => {
            const ti = translatedItems[idx]
            return (
            <article key={item.id} className="gallery-card">
              <div className="gallery-media">
                <img src={item.image} alt={ti?.title || item.title} />
              </div>
              <div className="gallery-body">
                <h3>{ti?.title || item.title}</h3>
                <p className="meta">
                  {ti?.location || item.location} • {item.year}
                </p>
                <p>{ti?.summary || item.summary}</p>
              </div>
            </article>
            )
          })}
        </div>

        <aside className="downloads-panel">
          <p className="eyebrow">{t('gallery.downloadsEyebrow')}</p>
          <h2>{t('gallery.downloadsTitle')}</h2>
          <p>{t('gallery.downloadsDescription')}</p>

          <ul className="download-list">
            <li className="download-item">
              <div>
                <strong>{t('gallery.brochureName')}</strong>
                <p>{t('gallery.brochureDesc')}</p>
              </div>
              <a href="/downloads/hub-wastewater-brochure.txt" download className="download-link">
                {t('gallery.download')}
              </a>
            </li>
            <li className="download-item">
              <div>
                <strong>{t('gallery.wastewaterFactsName')}</strong>
                <p>{t('gallery.wastewaterFactsDesc')}</p>
              </div>
              <a href="/downloads/wastewater-facts.txt" download className="download-link">
                {t('gallery.download')}
              </a>
            </li>
            <li className="download-item">
              <div>
                <strong>{t('gallery.nonPropName')}</strong>
                <p>{t('gallery.nonPropDesc')}</p>
              </div>
              <a href="/downloads/non-proprietary-documents.txt" download className="download-link">
                {t('gallery.download')}
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
