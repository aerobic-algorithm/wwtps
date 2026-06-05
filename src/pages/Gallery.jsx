import { gallery } from '../data/gallery'

export default function Gallery() {
  return (
    <section className="gallery-page">
      <div className="section-header">
        <p className="eyebrow">Case Studies</p>
        <h1>Project highlights in wastewater treatment</h1>
        <p>
          A selection of recent projects showcasing process upgrades, industrial
          pretreatment, and commissioning & training work.
        </p>
      </div>

      <div className="gallery-grid container">
        {gallery.map((item) => (
          <article key={item.id} className="gallery-card">
            <div className="gallery-media">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="gallery-body">
              <h3>{item.title}</h3>
              <p className="meta">
                {item.location} • {item.year}
              </p>
              <p>{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
