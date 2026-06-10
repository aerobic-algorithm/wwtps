import { useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'

export default function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null)

  function toggle(i) {
    setOpenIdx(i === openIdx ? null : i)
  }

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={i} className={`accordion-item${i === openIdx ? ' open' : ''}`}>
          <button
            type="button"
            className="accordion-trigger"
            onClick={() => toggle(i)}
            aria-expanded={i === openIdx}
          >
            <span>{item.q}</span>
            <HiOutlineChevronDown className="accordion-icon" size={18} />
          </button>
          <div className="accordion-panel" role="region">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
