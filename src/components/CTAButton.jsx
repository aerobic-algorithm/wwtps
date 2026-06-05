import { Link } from 'react-router-dom'

export default function CTAButton({ to = '/contact', children }) {
  return (
    <Link to={to} className="cta-button">
      {children}
    </Link>
  )
}
