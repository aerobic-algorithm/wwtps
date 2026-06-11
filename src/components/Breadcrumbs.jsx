import { useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getPostBySlug } from '../data/posts'

const LABEL_MAP = {
  '': 'Home',
  'about': 'header.about',
  'services': 'header.services',
  'team': 'header.team',
  'gallery': 'header.caseStudies',
  'contact': 'header.contact',
  'testimonials': 'Testimonials',
  'blog': 'header.blog',
}

export default function Breadcrumbs() {
  const { pathname } = useLocation()
  const { t } = useTranslation()

  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return null

  const crumbs = segments.map((segment, idx) => {
    const path = '/' + segments.slice(0, idx + 1).join('/')
    let label = LABEL_MAP[segment] || segment

    if (segment === segments[0] && segment !== 'blog') {
      label = LABEL_MAP[segment]
        ? (label.startsWith('header.') ? t(label) : label)
        : segment
    } else if (segment !== 'blog') {
      label = LABEL_MAP[segment]
        ? (LABEL_MAP[segment].startsWith('header.') ? t(LABEL_MAP[segment]) : LABEL_MAP[segment])
        : segment
    }

    if (segment === 'blog' || segment.startsWith('blog')) {
      label = t('header.blog')
    }

    const isLast = idx === segments.length - 1

    if (idx === 1 && segments[0] === 'blog') {
      const post = getPostBySlug(segment)
      if (post) label = post.title
    }

    return { path, label, isLast }
  })

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/" className="breadcrumb-link">Home</Link>
      {crumbs.map((crumb) => (
        <span key={crumb.path}>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          {crumb.isLast ? (
            <span className="breadcrumb-current" aria-current="page">{crumb.label}</span>
          ) : (
            <Link to={crumb.path} className="breadcrumb-link">{crumb.label}</Link>
          )}
        </span>
      ))}
    </nav>
  )
}
