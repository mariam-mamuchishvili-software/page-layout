import type { ReactNode } from 'react'

interface Props {
  icon: string
  children: ReactNode
}

export default function ContactItem({ icon, children }: Props) {
  return (
    <li className="contact-item" data-layout-structure="component">
      <span className="material-symbols-outlined">{icon}</span>
      {children}
    </li>
  )
}
