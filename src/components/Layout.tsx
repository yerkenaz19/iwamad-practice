import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Header
        title="Yerkenaz Sagynbayeva - Week4"
        subtitle="IT Management Student & Web Developer"
      />

      <Outlet />

      <Footer copyright="© 2026 Sagynbayeva Yerkenaz" />
    </>
  )
}

export default Layout