import type { Event } from '../types/event.types'
import EventCard from '../components/EventCard'

interface Props {
  title?: string
  icon?: string
  events?: Event[]
  onDelete: (id: number) => void
}

export default function EventsBlock({
  title = 'Upcoming Events',
  icon = 'event',
  events = [],
  onDelete,
}: Props) {
  return (
    <div
      className="events-block"
      data-layout-structure="block"
      data-media="container"
    >
      <h3 className="block-header event-title">
        <span className="material-symbols-outlined">{icon}</span>
        {title}
      </h3>
      <div className="events-wrapper">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}
