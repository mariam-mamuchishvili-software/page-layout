export default function SocialIcon({ href, label, iconClass }) {
  return (
    <div className="social-icon" data-layout-structure="component">
      <a href={href} aria-label={label}>
        <span className="label">{label}</span>
        <i className={iconClass} />
      </a>
    </div>
  )
}
