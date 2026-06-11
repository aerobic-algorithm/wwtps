import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { getPostBySlug } from '../data/posts'
import Seo from '../components/Seo'

const SHARE_SITES = [
  {
    id: 'linkedin',
    icon: FaLinkedin,
    href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    label: 'LinkedIn',
  },
  {
    id: 'x',
    icon: FaXTwitter,
    href: (url, title) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    label: 'X',
  },
  {
    id: 'facebook',
    icon: FaFacebook,
    href: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    label: 'Facebook',
  },
]

export default function BlogPost() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const post = getPostBySlug(slug)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = post?.title || ''

  if (!post) {
    return (
      <section className="notfound-page">
        <div className="section-header">
          <p className="eyebrow">404</p>
          <h1>Post not found</h1>
          <p>The blog post you are looking for does not exist.</p>
          <Link to="/blog" className="cta-button" style={{ marginTop: 24, display: 'inline-flex' }}>
            &larr; Back to blog
          </Link>
        </div>
      </section>
    )
  }

  const paragraphs = post.content.split('\n\n')

  return (
    <article className="blog-post-page">
      <Seo title={post.title} description={post.summary} path={`/blog/${post.slug}`} />
      <Link to="/blog" className="blog-back-link">&larr; {t('blog.back')}</Link>
      <h1 className="blog-post-title">{post.title}</h1>
      <p className="blog-post-summary">{post.summary}</p>
      <div className="blog-post-content">
        {paragraphs.map((p, i) => {
          if (p.startsWith('**') && p.includes('**')) {
            const boldEnd = p.indexOf('**', 2)
            const bold = p.slice(2, boldEnd)
            const rest = p.slice(boldEnd + 2)
            return (
              <p key={i}>
                <strong>{bold}</strong>
                {rest}
              </p>
            )
          }
          return <p key={i}>{p}</p>
        })}
      </div>

      {shareUrl && (
        <div className="share-buttons">
          <p className="share-label">Share this post</p>
          <div className="share-row">
            {SHARE_SITES.map((site) => {
              const Icon = site.icon
              return (
                <a
                  key={site.id}
                  href={site.href(shareUrl, shareTitle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn"
                  aria-label={`Share on ${site.label}`}
                >
                  <Icon />
                  <span>{site.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      )}
    </article>
  )
}
