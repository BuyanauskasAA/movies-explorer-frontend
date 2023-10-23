import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import AuthContext from '../../contexts/AuthContext';

function Header({ onPopupOpen }) {
  const loggedIn = React.useContext(AuthContext);

  return (
    <header className="header">
      <Logo />
      {loggedIn ? (
        <>
          <Navigation />
          <button onClick={onPopupOpen} className="header__navigation-button"></button>
        </>
      ) : (
        <div className="header__auth">
          <Link className="header__link" to="/signup">
            Регистрация
          </Link>
          <Link className="header__link header__link_type_signin" to="/signin">
            Войти
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
