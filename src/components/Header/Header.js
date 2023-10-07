import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../Navigation/Navigation';

function Header() {
  const loggedIn = React.useContext(AuthContext);
  return (
    <header className="header">
      <Link className="header__logo" to="/" />
      {loggedIn ? (
        <>
          <Navigation />
          <Link className="header__link header__link_type_account" to="/profile">
            Аккаунт
          </Link>
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
