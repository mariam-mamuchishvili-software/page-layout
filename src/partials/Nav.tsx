import NavItem from '../components/NavItem'

export default function Nav() {
  return (
    <nav data-layout-structure="partial">
      <ul className="nav-list" data-layout-structure="block">
        <NavItem to="/" icon="home" label="Home" />
        <NavItem to="/about" icon="info" label="About" />
        <NavItem to="/services" icon="design_services" label="Services" />
        <NavItem to="/contact" icon="mail" label="Contact" />
      </ul>
      <div className="authorization" data-layout-structure="block">
        <button data-layout-structure="component">Sign In</button>
        <button data-layout-structure="component">Sign Up</button>
      </div>
    </nav>
  )
}
