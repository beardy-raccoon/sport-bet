import './Main.css';
import Events from '../Events/Events';
import InfoToolTip from '../InfoToolTip/InfoToolTip';

export default function Main({ events, placedBet, isModalOpen, onClose }) {
  return (
    <main className="content">
      <div className="banner"></div>
      <InfoToolTip isOpen={isModalOpen} bet={placedBet} handleClose={onClose} />
      <Events events={events} />
    </main>
  );
}