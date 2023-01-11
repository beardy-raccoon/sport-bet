import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2023 Влад Мещеринов</p>
      <nav className="footer__nav">
        <ul className="footer__link-list">
          <li className="footer__link-list-item">
            <a href="https://linkedin.com/in/vladmeshcherinov-2bb63a84" target={'_blank'} rel="noreferrer" className="footer__link">LinkedIn</a>
          </li>
          <li className="footer__link-list-item">
            <a href="https://github.com/beardy-raccoon" target={'_blank'} rel="noreferrer" className="footer__link">Github</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}