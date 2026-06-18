import type { Event } from "../types/event.types";

interface Props {
  event: Event;
  onDelete: (id: number) => void;
}

export default function EventCard({ event, onDelete }: Props) {
  const {
    id,
    title,
    attendees,
    capacity,
    status,
    description,
    location,
    startDate,
    tags,
  } = event;
  const { venue, city, country } = location;
  const pct = Math.round((attendees / capacity) * 100);
  const capacityColor =
    pct >= 100
      ? "var(--clr-danger)"
      : pct >= 80
        ? "var(--clr-warning)"
        : "var(--clr-accent)";
  const isFull = pct >= 100;
  const badgeClass = isFull ? "badge--sold_out" : `badge--${status}`;
  const statusLabel = isFull ? "sold out" : status.replace("_", " ");

  return (
    <div className="event" data-layout-structure="component">
      <div className="event-header">
        <h4 className="event-title-text">{title}</h4>
        <span className={`badge ${badgeClass}`}>{statusLabel}</span>
      </div>
      <p className="event-desc">{description}</p>
      <div className="event-location">
        📍 {venue}, {city}, {country}
      </div>
      <div className="event-footer">
        <span className="event-date">
          🗓{" "}
          {new Date(startDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <div className="capacity-bar">
          <div className="capacity-track">
            <div
              className="capacity-fill"
              style={{
                width: `${Math.min(pct, 100)}%`,
                background: capacityColor,
              }}
            />
          </div>
          <span className="capacity-label">
            {attendees} / {capacity}
          </span>
        </div>
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <button className="btn-delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
