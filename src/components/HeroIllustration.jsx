export default function HeroIllustration() {
  return (
    <div className="hero-card__image hero-illustration" aria-hidden="true">
      <svg viewBox="0 0 600 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <g className="wave-group-1">
          <path
            d="M0,140 C80,100 200,170 300,120 S460,150 600,100 L600,200 L0,200 Z"
            fill="currentColor"
            className="wave-fill wave-fill-1"
          />
        </g>
        <g className="wave-group-2">
          <path
            d="M0,165 C120,135 240,185 360,145 S480,165 600,140 L600,200 L0,200 Z"
            fill="currentColor"
            className="wave-fill wave-fill-2"
          />
        </g>
        <g className="ring-group">
          <circle cx="465" cy="75" r="36" fill="none" stroke="currentColor" className="ring ring-outer" />
          <circle cx="465" cy="75" r="26" fill="none" stroke="currentColor" className="ring ring-mid" />
          <circle cx="465" cy="75" r="16" fill="none" stroke="currentColor" className="ring ring-inner" strokeDasharray="4 6" />
        </g>
        <circle cx="100" cy="120" r="4.5" fill="currentColor" className="bubble b1" />
        <circle cx="220" cy="85" r="3" fill="currentColor" className="bubble b2" />
        <circle cx="350" cy="140" r="5.5" fill="currentColor" className="bubble b3" />
        <circle cx="150" cy="65" r="2.5" fill="currentColor" className="bubble b4" />
        <circle cx="530" cy="130" r="3.5" fill="currentColor" className="bubble b5" />
        <circle cx="400" cy="50" r="2" fill="currentColor" className="bubble b6" />
        <circle cx="280" cy="55" r="3" fill="currentColor" className="bubble b7" />
      </svg>
    </div>
  )
}