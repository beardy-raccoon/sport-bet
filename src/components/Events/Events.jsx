import './Events.css';
import EventsList from '../EventsList/EventsList';

export default function Events({ events }) {

  const currentEvents = events.filter(event => event.date === '17 января 2023');
  const futureEvents = events.filter(event => event.date !== '17 января 2023');

  return (
    <section className="events">
      <EventsList
        title={'Текущие события'}
        items={currentEvents}
      />
      <EventsList
        title={'Предстоящие события'}
        items={futureEvents}
      />
    </section>
  );
}
