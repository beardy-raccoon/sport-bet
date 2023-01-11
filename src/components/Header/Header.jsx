import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {

  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/');
  }

  return (
    <header className="header">
      <Link to={'/'} className="header__nav-link">
        <div className="header__logo"></div>
      </Link>
      <nav className="header__nav">
        <Link to={'/'} className="header__nav-link">
          <p className="header__nav-link">Регистрация</p>
        </Link>
        <button className="button header__nav-button" onClick={handleClickButton}>Войти</button>
      </nav>
    </header >
  );
}