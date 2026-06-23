import { Outlet } from 'react-router'
import Nav from '../partials/Nav'
import Slider from '../partials/Slider'
import Footer from '../partials/Footer'

export default function AppLayout() {
  return (
    <section className="wrapper" data-layout-structure="page">
      <div className="container" data-layout-structure="builder">
        <Nav />
        <Slider />
        <Outlet />
        <Footer />
      </div>
    </section>
  )
}
