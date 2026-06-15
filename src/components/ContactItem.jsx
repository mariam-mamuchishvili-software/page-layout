export default function ContactItem({ icon, children }) {
  return (
    <li className="contact-item" data-layout-structure="component">
      <span className="material-symbols-outlined">{icon}</span>
      {children}
    </li>
  )
}
