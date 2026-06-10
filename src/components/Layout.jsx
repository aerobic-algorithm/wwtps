import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'

export default function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-shell container">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
