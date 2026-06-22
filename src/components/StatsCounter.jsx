import useAnimatedCounter from '../hooks/useAnimatedCounter'

export default function StatsCounter({ end, suffix = '', label }) {
  const [ref, count] = useAnimatedCounter(end)

  return (
    <div className="stat-counter" ref={ref}>
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}
