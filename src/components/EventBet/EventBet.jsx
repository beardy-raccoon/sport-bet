import './EventBet.css';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import NotFound from '../NotFound/NotFound';

export default function EventBet({ events, onPlaceBet }) {

  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState({});
  const { id } = useParams();

  const event = events.find(event => event.id === id);

  const handleInputCheck = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setIsValid(target.closest("form").checkValidity());
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onPlaceBet(values)
    navigate('/');
  }

  return (
    event ?
      <section className="event-bet">
        <h2 className="event-bet__title">Детали события</h2>
        <div className="event-bet__content-wrapper">
          <div className="event-bet__team-wrapper">
            <img src={event.firstTeam.logo} alt={`Логотип команды ${event.firstTeam.name}`} className="event-card__team-logo"></img>
            <p className="event-bet__team-name">{event.firstTeam.name}</p>
          </div>
          <div className="event-bet__mid-content-container">
            <div className="event-bet__description">
              <p className="event-bet__date">{event.date}</p>
              <p className="event-bet__time">{event.time}</p>
            </div>
            <form className="event-bet__form" method="post" onSubmit={handleFormSubmit}>
              <div className="event-bet__input-container">
                <input className="event-bet__input" type="radio" value={event.bet.firstTeam} name="placedBet" id="firstTeam" onChange={handleInputCheck} required />
                <label className="event-bet__label" htmlFor="firstTeam">{event.bet.firstTeam}</label>
                <input className="event-bet__input" type="radio" value={event.bet.draw} name="placedBet" id="draw" onChange={handleInputCheck} required />
                <label className="event-bet__label" htmlFor="draw">{event.bet.draw}</label>
                <input className="event-bet__input" type="radio" value={event.bet.secondTeam} name="placedBet" id="secondTeam" onChange={handleInputCheck} required />
                <label className="event-bet__label" htmlFor="secondTeam">{event.bet.secondTeam}</label>
              </div>
              <button className="button event-bet__form-button" type="submit" disabled={!isValid}>Сделать ставку</button>
            </form>
          </div>
          <div className="event-bet__team-wrapper">
            <img src={event.secondTeam.logo} alt={`Логотип команды ${event.secondTeam.name}`} className="event-card__team-logo"></img>
            <p className="event-bet__team-name">{event.secondTeam.name}</p>
          </div>
        </div>
        <Link className="link" to={'/'}>
          <p className="event-bet__link-text">{`<-- Вернуться на главную`}</p>
        </Link>
      </section>
      :
      <NotFound />
  );
}