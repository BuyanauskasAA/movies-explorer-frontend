import './Register.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Register() {
  return (
    <main className="register">
      <Logo />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <div className="register__container">
          <label className="register__label" for="name">
            Имя
          </label>
          <input className="register__input" id="name" name="name" type="text" />
          <label className="register__label" for="email">
            E-mail
          </label>
          <input className="register__input" id="email" name="email" type="email" />
          <label className="register__label" for="password">
            Пароль
          </label>
          <input className="register__input" id="password" name="password" type="password" />
        </div>
        <button className="register__submit-button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="register__caption">
        <p className="register__text">Уже зарегистрированы?</p>
        <Link className="register__link" to="/signin">
          Войти
        </Link>
      </div>
    </main>
  );
}

export default Register;
