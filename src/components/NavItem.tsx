interface Props {
  href: string
  icon: string
  label: string
  active?: boolean
}

export default function NavItem({ href, icon, label, active }: Props) {
  return (
    <li className={active ? 'active' : ''} data-layout-structure="component">
      <a className="nav-link" href={href}>
        <span className="material-symbols-outlined">{icon}</span>
        <span className="link-label">{label}</span>
      </a>
    </li>
  )
}
