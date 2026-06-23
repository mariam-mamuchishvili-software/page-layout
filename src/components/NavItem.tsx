import { Link, useMatch } from "react-router";

interface Props {
  to: string;
  icon: string;
  label: string;
}

export default function NavItem({ to, icon, label }: Props) {
  const match = useMatch({ path: to, end: true });

  return (
    <li className={match ? "active" : ""} data-layout-structure="component">
      <Link className="nav-link" to={to}>
        <span className="material-symbols-outlined">{icon}</span>
        <span className="link-label">{label}</span>
      </Link>
    </li>
  );
}
