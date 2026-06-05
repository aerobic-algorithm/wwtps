import WaveDivider from '../components/WaveDivider'

export default function CompanyProfile() {
  return (
    <section className="company-page">
      <div className="section-header">
        <p className="eyebrow">About Hub Wastewater Solutions</p>
        <h1>Engineering wastewater systems with resilience in mind.</h1>
        <p>
          Our team brings decades of operational experience from industrial,
          municipal, and advanced treatment facilities. We specialize in
          pragmatic recommendations, reliable commissioning, and operator
          training.
        </p>
      </div>

      <WaveDivider className="section-divider invert" />

      <div className="content-grid">
        <div className="content-panel">
          <h2>Our mission</h2>
          <p>
            Help water and wastewater organizations improve performance with
            clear process insight, actionable service plans, and hands-on site
            support.
          </p>
        </div>
        <div className="content-panel">
          <h2>Core expertise</h2>
          <ul>
            <li>Biological and chemical treatment optimization</li>
            <li>Test & commissioning for new equipment and upgrades</li>
            <li>Process troubleshooting and startup support</li>
            <li>Operations training and plant transfer guidance</li>
          </ul>
        </div>
        <div className="content-panel">
          <h2>Certifications</h2>
          <ul>
            <li>ISO 9001-inspired quality management practices</li>
            <li>OSHA-compliant field safety procedures</li>
            <li>State-approved wastewater operator training curricula</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
