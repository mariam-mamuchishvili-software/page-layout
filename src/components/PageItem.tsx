interface Props {
  page?: number
  active?: boolean
  label?: string
  icon?: string
  onClick: () => void
}

export default function PageItem({ page, active, label, icon, onClick }: Props) {
  return (
    <li className={`page-item${active ? ' active' : ''}`} data-layout-structure="component">
      <button className="page-link" onClick={onClick} aria-label={label}>
        {icon
          ? <span className="material-symbols-outlined">{icon}</span>
          : page}
      </button>
    </li>
  )
}
