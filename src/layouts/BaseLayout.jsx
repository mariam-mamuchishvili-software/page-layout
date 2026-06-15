import Nav from '../partials/Nav'
import Slider from '../partials/Slider'
import Footer from '../partials/Footer'

export default function BaseLayout({ title, subtitle, children, flashMessages }) {
  return (
    <section className="wrapper" data-layout-structure="page">
      <div className="container" data-layout-structure="builder">
        <header data-layout-structure="block">
          <h2 className="section-title" data-content="title">{title}</h2>
          <h4 className="section-subtitle" data-content="subtitle">{subtitle}</h4>
        </header>
        <Nav />
        <Slider />
        {flashMessages}
        {children}
        <Footer />
      </div>
    </section>
  )
}
