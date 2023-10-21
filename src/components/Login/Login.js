import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Error from '../Error/Error';

function Login({ onLogin, isErrorVisible, errorStatus }) {
  const [formValue, setFormValue] = React.useState({});
  const [formErrors, setFormErrors] = React.useState({ email: '', password: '' });
  const [isFormValid, setFormValid] = React.useState(false);
  const formSubmitButton = React.useRef();

  function handleChange(event) {
    const target = event.target;
    const { name, value } = target;
    setFormValue({ ...formValue, [name]: value });
    setFormErrors({ ...formErrors, [name]: target.validationMessage });
    setFormValid(target.closest('form').checkValidity());
  }

  function handleSubmit(event) {
    event.preventDefault();

    onLogin(formValue, formSubmitButton.current);
  }

  let errorText;

  if (errorStatus === 401) {
    errorText = 'Вы ввели неправильный логин или пароль.';
  } else if (errorStatus === 400) {
    errorText = 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';
  } else {
    errorText = 'При авторизации произошла ошибка. Переданный токен некорректен';
  }

  return (
    <main className="login">
      <Logo />
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <div className="login__container">
          <label className="login-label" htmlFor="email">
            E-mail
          </label>
          <input
            onChange={handleChange}
            className={`login-input ${formErrors.email.length > 0 ? 'login-input__error' : ''}`}
            id="email"
            name="email"
            type="email"
            pattern="[a-zA-Z0-9\.\-_]+@[a-zA-Z0-9\.\-_]+\.[a-zA-Z0-9\-_]+"
            required
            autoComplete="on"
          />
          <span className="login-input-error">{formErrors.email}</span>
          <label className="login-label" htmlFor="password">
            Пароль
          </label>
          <input
            onChange={handleChange}
            className={`login-input ${formErrors.password.length > 0 ? 'login-input__error' : ''}`}
            id="password"
            name="password"
            type="password"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="login-input-error">{formErrors.password}</span>
        </div>
        <Error isActive={isErrorVisible} text={errorText} />
        <button
          ref={formSubmitButton}
          onClick={handleSubmit}
          className={`login-submit-button ${isFormValid ? '' : 'login-submit-button_disabled'}`}
          type="submit"
          disabled={!isFormValid}
        >
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
