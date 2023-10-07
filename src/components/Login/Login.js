import './Login.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Login() {
  return (
    <main className="login">
      <Logo />
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <div className="login__container">
          <label className="login__label" for="email">
            E-mail
          </label>
          <input className="login__input" id="email" name="email" type="email" />
          <label className="login__label" for="password">
            Пароль
          </label>
          <input className="login__input" id="password" name="password" type="password" />
        </div>
        <button className="login__submit-button" type="submit">
          Войти
        </button>
      </form>
      <div className="login__caption">
        <p className="login__text">Ещё не зарегистрированы?</p>
        <Link className="login__link" to="/signup">
          Регистрация
        </Link>
      </div>
    </main>
  );
}

export default Login;
