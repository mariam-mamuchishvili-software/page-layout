interface Props {
  href: string
  label: string
  iconClass: string
}

export default function SocialIcon({ href, label, iconClass }: Props) {
  return (
    <div className="social-icon" data-layout-structure="component">
      <a href={href} aria-label={label}>
        <span className="label">{label}</span>
        <i className={iconClass} />
      </a>
    </div>
  )
}
