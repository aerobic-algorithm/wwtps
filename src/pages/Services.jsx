import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <section className="services-page">
      <div className="section-header">
        <p className="eyebrow">Our Services</p>
        <h1>Solutions for safer, more efficient wastewater operations.</h1>
        <p>
          We build service plans around each site's equipment, permits, and
          operational goals so teams can meet compliance without sacrificing
          reliability.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}
