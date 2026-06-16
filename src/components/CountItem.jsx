export default function CountItem({ icon, value, label, color }) {
  return (
    <div
      className="count-item"
      data-layout-structure="component"
      style={{ '--count-color': color }}
    >
      <span className="material-symbols-outlined count-icon">{icon}</span>
      <span className="count-value">{value}</span>
      <span className="count-label">{label}</span>
    </div>
  )
}
