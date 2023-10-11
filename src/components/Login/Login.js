import './Login.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import FormInput from '../FormInput/FormInput';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';

function Login() {
  return (
    <main className="login">
      <Logo />
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <div className="login__container">
          <FormInput name="email" type="email" text="E-mail" />
          <FormInput name="password" type="password" text="Пароль" />
        </div>
        <FormSubmitButton text="Войти" />
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
