export default function WaveDivider({ className = '', invert = false }) {
  return (
    <div className={`wave-divider ${className} ${invert ? 'invert' : ''}`}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z" />
      </svg>
    </div>
  )
}
