import './EventsList.css';
import { Link } from 'react-router-dom';
import EventCard from '../EventCard/EventCard';

export default function EventsList({ title, items }) {
  return (
    <div className="events-list-container">
      <h2 className="events-title">{title}</h2>
      <ul className="events-list">
        {items.map(item => (
          <Link key={item.id} to={`/bets/${item.id}`} className="event-link">
            <EventCard
              event={item}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}