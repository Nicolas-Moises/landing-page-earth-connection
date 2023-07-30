import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'

export function DefaultLayout() {
  return (
    <div className="px-6">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
