import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineXMark, HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { services } from '../data/services'
import { team } from '../data/team'
import { gallery } from '../data/gallery'
import { posts } from '../data/posts'

const pages = [
  { title: 'Home', path: '/', keywords: 'home wastewater treatment' },
  { title: 'About', path: '/about', keywords: 'about company mission expertise certifications' },
  { title: 'Services', path: '/services', keywords: 'services process optimization commissioning troubleshooting training compliance startup' },
  { title: 'Team', path: '/team', keywords: 'team engineers staff' },
  { title: 'Case Studies', path: '/gallery', keywords: 'gallery case studies projects downloads' },
  { title: 'Testimonials', path: '/testimonials', keywords: 'testimonials client feedback reviews' },
  { title: 'Blog', path: '/blog', keywords: 'blog articles insights' },
  { title: 'Contact', path: '/contact', keywords: 'contact form email phone whatsapp telegram office' },
]

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [handleKey])

  const q = query.toLowerCase().trim()
  const results = []

  if (q) {
    pages.forEach((p) => {
      const match = p.title.toLowerCase().includes(q) || p.keywords.includes(q)
      if (match) results.push({ type: 'Page', title: p.title, path: p.path, excerpt: p.keywords })
    })

    services.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)) {
        results.push({ type: 'Service', title: s.title, path: '/services', excerpt: s.description })
      }
    })

    team.forEach((m) => {
      if (m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q)) {
        results.push({ type: 'Team', title: m.name, path: '/team', excerpt: m.role })
      }
    })

    gallery.forEach((g) => {
      if (g.title.toLowerCase().includes(q) || g.summary.toLowerCase().includes(q) || g.location.toLowerCase().includes(q)) {
        results.push({ type: 'Case Study', title: g.title, path: '/gallery', excerpt: g.summary })
      }
    })

    posts.forEach((p) => {
      if (p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q)) {
        results.push({ type: 'Blog', title: p.title, path: `/blog/${p.slug}`, excerpt: p.summary })
      }
    })
  }

  return (
    <div className="search-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Search">
      <div className="search-panel" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-row">
          <HiOutlineMagnifyingGlass size={20} />
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Search pages, services, team, blog…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" className="search-close-btn" onClick={onClose} aria-label="Close search">
            <HiOutlineXMark size={24} />
          </button>
        </div>

        {q && (
          <div className="search-results">
            {results.length === 0 && <p className="search-empty">No results found for &ldquo;{query}&rdquo;</p>}
            {results.map((r, i) => (
              <Link key={i} to={r.path} className="search-result-item" onClick={onClose}>
                <span className="search-result-type">{r.type}</span>
                <strong>{r.title}</strong>
                <p>{r.excerpt}</p>
              </Link>
            ))}
          </div>
        )}

        {!q && (
          <p className="search-hint">Type to search through pages, services, team members, case studies, and blog posts.</p>
        )}
      </div>
    </div>
  )
}
