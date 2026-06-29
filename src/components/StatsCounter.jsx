import { Link } from 'react-router-dom'
import useAnimatedCounter from '../hooks/useAnimatedCounter'

export default function StatsCounter({ icon: Icon, end, suffix = '', label, to }) {
  const [ref, count] = useAnimatedCounter(end)

  const content = (
    <>
      {Icon && <Icon className="stat-icon" />}
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className="stat-counter stat-counter--link" ref={ref}>
        {content}
      </Link>
    )
  }

  return (
    <div className="stat-counter" ref={ref}>
      {content}
    </div>
  )
}
