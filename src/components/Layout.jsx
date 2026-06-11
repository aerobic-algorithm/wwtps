import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'
import FloatingWhatsApp from './FloatingWhatsApp'

export default function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-shell container">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  )
}
