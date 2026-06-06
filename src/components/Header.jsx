import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/">
          Hub Wastewater Solutions
        </Link>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`primary-nav ${isMenuOpen ? 'active' : ''}`} aria-label="Primary navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Services
          </NavLink>
          <NavLink to="/team" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Team
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Case Studies
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
