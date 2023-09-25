import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/" />
      <div className="header__auth">
        <Link className="header__link" to="/sign-up">
          Регистрация
        </Link>
        <Link className="header__link header__link_type_signin" to="/sign-in">
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;
