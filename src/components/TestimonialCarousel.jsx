import { useState, useEffect, useCallback } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'

export default function TestimonialCarousel({ items }) {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((i) => setCurrent(i), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + items.length) % items.length), [items.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % items.length), [items.length])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const item = items[current]

  return (
    <div className="carousel">
      <div className="carousel-track">
        <div className="carousel-slide" key={current}>
          <p className="carousel-quote">&ldquo;{item.quote}&rdquo;</p>
          <p className="carousel-author">{item.name}, {item.role}</p>
        </div>
      </div>

      <div className="carousel-controls">
        <button type="button" className="carousel-arrow" onClick={prev} aria-label="Previous testimonial">
          <HiOutlineChevronLeft size={20} />
        </button>
        <div className="carousel-dots">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`carousel-dot${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button type="button" className="carousel-arrow" onClick={next} aria-label="Next testimonial">
          <HiOutlineChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
