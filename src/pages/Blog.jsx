import { useTranslation } from 'react-i18next'

export default function Blog() {
  const { t } = useTranslation()
  const posts = t('blog.items', { returnObjects: true })

  return (
    <section className="blog-page">
      <div className="section-header">
        <p className="eyebrow">{t('blog.eyebrow')}</p>
        <h1>{t('blog.title')}</h1>
        <p>{t('blog.description')}</p>
      </div>
      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.title} className="blog-card">
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
