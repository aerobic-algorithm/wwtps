import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import AnimatedSection from '../components/AnimatedSection'
import { posts } from '../data/posts'

export default function Blog() {
  const { t } = useTranslation()
  const translatedPosts = t('blog.items', { returnObjects: true })

  return (
    <section className="blog-page">
      <Seo title="Blog" description={t('blog.description')} path="/blog" />

      <AnimatedSection className="section-header">
        <p className="eyebrow">{t('blog.eyebrow')}</p>
        <h1>{t('blog.title')}</h1>
        <p>{t('blog.description')}</p>
      </AnimatedSection>
      <div className="blog-grid">
        {posts.map((post, idx) => (
          <AnimatedSection key={post.slug} as="article" className="blog-card" style={{ animationDelay: `${idx * 0.1}s` }}>
            <Link to={`/blog/${post.slug}`} className="blog-card-link">
              <h2>{translatedPosts[idx]?.title || post.title}</h2>
              <p>{translatedPosts[idx]?.summary || post.summary}</p>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
