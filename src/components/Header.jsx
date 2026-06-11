import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import DarkModeToggle from './DarkModeToggle'
import SearchOverlay from './SearchOverlay'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'am' : 'en'
    i18n.changeLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/">
          Hub Wastewater Solutions
        </Link>
        <div className="header-controls">
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
          <button
            className="header-icon-btn"
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            title="Search"
          >
            <HiOutlineMagnifyingGlass size={18} />
          </button>
          <DarkModeToggle />
          <button
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            title={`Switch to ${i18n.language === 'en' ? 'Amharic' : 'English'}`}
          >
            {t('header.languageSwitch')}
          </button>
        </div>
        <nav className={`primary-nav ${isMenuOpen ? 'active' : ''}`} aria-label="Primary navigation">
          <div className="mobile-nav-tools">
            <button
              className="header-icon-btn"
              onClick={() => { setSearchOpen(true); setIsMenuOpen(false) }}
              aria-label="Open search"
              title="Search"
            >
              <HiOutlineMagnifyingGlass size={18} />
            </button>
            <DarkModeToggle />
          </div>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
            {t('header.home')}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
            {t('header.about')}
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
            {t('header.services')}
          </NavLink>
          <NavLink to="/team" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
            {t('header.team')}
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
            {t('header.caseStudies')}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
            {t('header.contact')}
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsMenuOpen(false)}>
            {t('header.blog')}
          </NavLink>
        </nav>
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </header>
  )
}
