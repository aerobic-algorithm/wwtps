import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import AnimatedSection from '../components/AnimatedSection'
import GalleryLightbox from '../components/GalleryLightbox'
import ProjectTimeline from '../components/ProjectTimeline'
import CategoryFilter from '../components/CategoryFilter'
import CTAButton from '../components/CTAButton'
import { gallery, galleryCategories } from '../data/gallery'

export default function Gallery() {
  const { t } = useTranslation()
  const translatedItems = t('gallery.items', { returnObjects: true })
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)

  const items = gallery.map((item, idx) => {
    const ti = translatedItems[idx]
    return {
      ...item,
      title: ti?.title || item.title,
      location: ti?.location || item.location,
      summary: ti?.summary || item.summary,
      image: `${import.meta.env.BASE_URL}${item.image}`,
    }
  })

  const filtered = activeCategory
    ? items.filter((item) => item.category === activeCategory)
    : items

  function handleCategoryChange(cat) {
    setActiveCategory(cat)
    setLightboxIndex(null)
  }

  function closeLightbox() { setLightboxIndex(null) }
  function prev() { setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length) }
  function next() { setLightboxIndex((i) => (i + 1) % filtered.length) }

  return (
    <section className="gallery-page">
      <Seo title="Case Studies" description={t('gallery.description')} path="/gallery" />

      <AnimatedSection className="section-header">
        <p className="eyebrow">{t('gallery.eyebrow')}</p>
        <h1>{t('gallery.title')}</h1>
        <p>{t('gallery.description')}</p>
      </AnimatedSection>

      <ProjectTimeline items={items} />

      <div className="gallery-layout container">
        <div className="gallery-grid">
          <CategoryFilter categories={galleryCategories} active={activeCategory} onChange={handleCategoryChange} />

          {filtered.map((item, idx) => (
            <AnimatedSection key={item.id} as="article" className="gallery-card" style={{ animationDelay: `${idx * 0.1}s` }}>
              <button
                type="button"
                className="gallery-card-btn"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`View ${item.title}`}
              >
                <div className="gallery-media">
                  <img src={item.image} alt={item.title} />
                  <span className="gallery-card-tag">{item.category}</span>
                </div>
                <div className="gallery-body">
                  <h3>{item.title}</h3>
                  <p className="meta">
                    {item.location} &bull; {item.year}
                  </p>
                  <p>{item.summary}</p>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection as="aside" className="downloads-panel">
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
        </AnimatedSection>
      </div>

      <AnimatedSection className="gallery-cta">
        <h2>{t('gallery.ctaTitle')}</h2>
        <p>{t('gallery.ctaDescription')}</p>
        <CTAButton>{t('gallery.ctaLabel')}</CTAButton>
      </AnimatedSection>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
