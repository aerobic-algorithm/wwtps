import { useTranslation } from 'react-i18next'
import AnimatedSection from '../components/AnimatedSection'

export default function Blog() {
  const { t } = useTranslation()
  const posts = t('blog.items', { returnObjects: true })

  return (
    <section className="blog-page">
      <AnimatedSection className="section-header">
        <p className="eyebrow">{t('blog.eyebrow')}</p>
        <h1>{t('blog.title')}</h1>
        <p>{t('blog.description')}</p>
      </AnimatedSection>
      <div className="blog-grid">
        {posts.map((post, idx) => (
          <AnimatedSection key={post.title} as="article" className="blog-card" style={{ animationDelay: `${idx * 0.1}s` }}>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
