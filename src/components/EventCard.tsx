import { Link } from 'react-router'
import type { CampusEvent } from '../data/events'

type EventCardProps = {
  event: CampusEvent
}

function EventCard({ event }: EventCardProps) {
  return (
    <article className="card">
      <h2>{event.title}</h2>

      <p>{event.date}</p>

      <p>{event.place}</p>

      <span>{event.seats} seats</span>

      <Link to={`/events/${event.id}`}>
        Details
      </Link>
    </article>
  )
}

export default EventCard