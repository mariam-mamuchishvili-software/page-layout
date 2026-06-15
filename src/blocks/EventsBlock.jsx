import { useState, useEffect } from 'react'
import EventCard from '../components/EventCard'
import { getEvents } from '../services/api'

export default function EventsBlock({ title = 'Upcoming Events', icon = 'event' }) {
  const [events, setEvents] = useState([])

  useEffect(() => {
    getEvents().then((data) => setEvents(data))
  }, [])

  return (
    <div className="events-block" data-layout-structure="block" data-media="container">
      <h3 className="block-header event-title">
        <span className="material-symbols-outlined">{icon}</span>
        {title}
      </h3>
      <div className="events-wrapper">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}
