import useInView from '../hooks/useInView'

export default function AnimatedSection({ as: Tag = 'div', className = '', fadeUp = true, children, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const animClass = fadeUp ? 'reveal' : 'reveal-fade'

  return (
    <Tag ref={ref} className={`${animClass} ${inView ? 'visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
