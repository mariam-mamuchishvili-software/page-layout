export default function EventCard({ event, onDelete }) {
  const pct = Math.round((event.attendees / event.capacity) * 100)
  const capacityColor =
    pct >= 100 ? 'var(--clr-danger)' : pct >= 80 ? 'var(--clr-warning)' : 'var(--clr-accent)'
  const isFull = pct >= 100
  const badgeClass = isFull ? 'badge--sold_out' : `badge--${event.status}`
  const statusLabel = isFull ? 'sold out' : event.status.replace('_', ' ')

  return (
    <div className="event" data-layout-structure="component">
      <div className="event-header">
        <h4 className="event-title-text">{event.title}</h4>
        <span className={`badge ${badgeClass}`}>{statusLabel}</span>
      </div>
      <p className="event-desc">{event.description}</p>
      <div className="event-location">
        📍 {event.location.venue}, {event.location.city}, {event.location.country}
      </div>
      <div className="event-footer">
        <span className="event-date">🗓 {new Date(event.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        <div className="capacity-bar">
          <div className="capacity-track">
            <div
              className="capacity-fill"
              style={{ width: `${Math.min(pct, 100)}%`, background: capacityColor }}
            />
          </div>
          <span className="capacity-label">{event.attendees} / {event.capacity}</span>
        </div>
      </div>
      <div className="tags">
        {event.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <button className="btn-delete" onClick={() => onDelete(event.id)}>
        Delete
      </button>
    </div>
  )
}
