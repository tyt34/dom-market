import { Footer } from '@widgets/Footer'
import { Header } from '@widgets/Header'
import { MenuDesktop } from '@widgets/MenuDesktop'
import { Outlet } from 'react-router-dom'
import './ApartmentsLayout.scss'

export const ApartmentsLayout = () => {
  return (
    <>
      <Header />

      <div className="menu">
        <MenuDesktop />
      </div>

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
