import { HiOutlineSparkles, HiOutlineRocketLaunch, HiOutlineShieldCheck } from 'react-icons/hi2'
import ServiceCard from '../components/ServiceCard'
import CTAButton from '../components/CTAButton'
import WaveDivider from '../components/WaveDivider'
import { services } from '../data/services'

export default function Home() {
  return (
    <section className="home-page">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Wastewater treatment made dependable</p>
          <h1>Reliable operations for utility, industrial, and municipal systems.</h1>
          <p className="hero-text">
            Hub Wastewater Solutions delivers treatment design support, commissioning,
            troubleshooting, and operator training backed by practical process
            experience.
          </p>
          <div className="hero-actions">
            <CTAButton>Start a consultation</CTAButton>
          </div>
        </div>
        <div className="hero-panel__card">
          <div className="hero-card">
            <p className="tag">Trusted by treatment leaders</p>
            <h2>Full-service wastewater expertise</h2>
            <p>
              Engineering, plant performance reviews, chemical dosing oversight,
              and operator guidance for long-term asset reliability.
            </p>
          </div>
        </div>
      </div>

      <WaveDivider className="section-divider" />

      <section className="feature-grid">
        <div className="feature-copy">
          <p className="eyebrow">What we deliver</p>
          <h2>Practical capabilities built for every plant.</h2>
          <p>
            From front-end studies to compliance support, our team helps reduce
            downtime, improve water quality, and minimize lifecycle costs.
          </p>
        </div>
        <div className="service-tiles">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="value-row">
        <div className="value-card">
          <HiOutlineSparkles className="value-icon" />
          <h3>Process clarity</h3>
          <p>Actionable reports and technical recommendations that site teams can use immediately.</p>
        </div>
        <div className="value-card">
          <HiOutlineRocketLaunch className="value-icon" />
          <h3>Fast response</h3>
          <p>Rapid troubleshooting and commissioning assistance for high-stakes operations.</p>
        </div>
        <div className="value-card">
          <HiOutlineShieldCheck className="value-icon" />
          <h3>Regulatory confidence</h3>
          <p>Practical compliance support for permit reviews, sampling, and reporting.</p>
        </div>
      </section>
    </section>
  )
}
