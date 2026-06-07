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

      <div className="gallery-layout container">
        <div className="gallery-grid">
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

        <aside className="downloads-panel">
          <p className="eyebrow">Downloads</p>
          <h2>Helpful resources for wastewater teams</h2>
          <p>
            Download our brochure, wastewater facts, and a curated set of non-proprietary
            treatment documents to support planning, training, and project review.
          </p>

          <ul className="download-list">
            <li className="download-item">
              <div>
                <strong>Brochure pack</strong>
                <p>Overview of our services, process strengths, and engagement approach.</p>
              </div>
              <a href="/downloads/hub-wastewater-brochure.txt" download className="download-link">
                Download
              </a>
            </li>
            <li className="download-item">
              <div>
                <strong>Wastewater facts</strong>
                <p>Key treatment metrics and process benchmarks for utilities and industry.</p>
              </div>
              <a href="/downloads/wastewater-facts.txt" download className="download-link">
                Download
              </a>
            </li>
            <li className="download-item">
              <div>
                <strong>Non-proprietary documents</strong>
                <p>Open-source treatment resources and guidance for operational improvement.</p>
              </div>
              <a href="/downloads/non-proprietary-documents.txt" download className="download-link">
                Download
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
