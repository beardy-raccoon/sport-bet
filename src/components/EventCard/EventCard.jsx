import './EventCard.css';
import { useNavigate } from 'react-router-dom';

export default function EventCard({ event }) {

  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(`/bets/${event.id}`);
  }

  return (
    <li className="event-card">
      <div className="event-card__teams">
        <div className="event-card__team-wrapper">
          <img src={event.firstTeam.logo} alt={`Логотип команды ${event.firstTeam.name}`} className="event-card__team-logo"></img>
          <p className="event-card__team-name">{event.firstTeam.name}</p>
        </div>
        <div className="event-card__team-wrapper">
          <img src={event.secondTeam.logo} alt={`Логотип команды ${event.secondTeam.name}`} className="event-card__team-logo"></img>
          <p className="event-card__team-name">{event.secondTeam.name}</p>
        </div>
      </div>
      <div className="event-card__description">
        <p className="event-card__date">{event.date}</p>
        <p className="event-card__time">{event.time}</p>
      </div>
      <div className="event-card__button-container">
        <button className="button event-card__button" onClick={handleClickButton}>Подробнее...</button>
      </div>
    </li>
  );
}