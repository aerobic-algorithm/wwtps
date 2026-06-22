import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'
import FloatingWhatsApp from './FloatingWhatsApp'
import Breadcrumbs from './Breadcrumbs'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <Header />
      <main className="page-shell container">
        <Breadcrumbs />
        <div key={location.pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  )
}
