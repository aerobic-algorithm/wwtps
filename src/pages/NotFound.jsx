import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="notfound-page">
      <div className="section-header">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for doesn’t exist yet.</p>
        <Link to="/" className="cta-button">
          Return home
        </Link>
      </div>
    </section>
  )
}
