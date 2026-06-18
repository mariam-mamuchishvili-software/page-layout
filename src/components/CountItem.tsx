import type { CSSProperties } from 'react'

interface Props {
  icon: string
  value: number
  label: string
  color: string
}

export default function CountItem({ icon, value, label, color }: Props) {
  return (
    <div
      className="count-item"
      data-layout-structure="component"
      style={{ '--count-color': color } as CSSProperties}
    >
      <span className="material-symbols-outlined count-icon">{icon}</span>
      <span className="count-value">{value}</span>
      <span className="count-label">{label}</span>
    </div>
  )
}
