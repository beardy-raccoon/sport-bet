import './InfoToolTip.css';

export default function InfoToolTip({ isOpen, bet, handleClose }) {
  return (
    <section className={`popup popup_type ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <div className="info-tool-tip">
          <p className="info-tool-tip__text">{`Спасибо, ваша ставка на "${bet}" принята`}</p>
        </div>
        <button className="button popup__close-button" onClick={handleClose}></button>
      </div>
    </section>
  );
}