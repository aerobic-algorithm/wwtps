export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden="true">
        {Icon && <Icon />}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
