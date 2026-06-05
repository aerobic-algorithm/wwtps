export default function Blog() {
  const posts = [
    {
      title: '5 steps to reduce plant downtime',
      summary: 'A structured process for prioritizing performance improvements, from sampling to operator training.',
    },
    {
      title: 'Troubleshooting an aeration failure',
      summary: 'A field-tested checklist for identifying air system, control, and biological risks quickly.',
    },
    {
      title: 'Commissioning upgraded chemical dosing',
      summary: 'How to validate feed strategy, sampling plans, and PLC integration on new treatment systems.',
    },
  ]

  return (
    <section className="blog-page">
      <div className="section-header">
        <p className="eyebrow">Blog</p>
        <h1>Insight for teams operating modern treatment facilities.</h1>
        <p>Practical stories on process reliability, compliance, and plant performance.</p>
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
