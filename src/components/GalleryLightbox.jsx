import { useEffect, useCallback } from 'react'
import { HiOutlineXMark, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'

export default function GalleryLightbox({ items, currentIndex, onClose, onPrev, onNext }) {
  const item = items[currentIndex]

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (!item) return null

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.title}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
        <HiOutlineXMark size={28} />
      </button>

      {items.length > 1 && (
        <>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous">
            <HiOutlineChevronLeft size={28} />
          </button>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next">
            <HiOutlineChevronRight size={28} />
          </button>
        </>
      )}

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="lightbox-info">
          <h2>{item.title}</h2>
          <p className="lightbox-meta">
            {item.location} &bull; {item.year}
          </p>
          <p className="lightbox-summary">{item.summary}</p>
          <p className="lightbox-counter">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </div>
    </div>
  )
}
