import { Footer } from '@widgets/Footer'
import { Header } from '@widgets/Header'
import { Outlet } from 'react-router-dom'

export const ApartmentsLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
