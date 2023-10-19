import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Error from '../Error/Error';

function Register({ onRegister, isErrorVisible, errorStatus }) {
  const [formValue, setFormValue] = React.useState({});
  const [formErrors, setFormErrors] = React.useState({ name: '', email: '', password: '' });
  const [isFormValid, setFormValid] = React.useState(false);

  function handleChange(event) {
    const target = event.target;
    const { name, value } = target;
    setFormValue({ ...formValue, [name]: value });
    setFormErrors({ ...formErrors, [name]: target.validationMessage });
    setFormValid(target.closest('form').checkValidity());
  }

  function handleSubmit(event) {
    event.preventDefault();

    onRegister(formValue);
  }

  return (
    <main className="register">
      <Logo />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" noValidate>
        <div className="register__container">
          <label className="register-label" htmlFor="name">
            Имя
          </label>
          <input
            onChange={handleChange}
            className={`register-input ${
              formErrors.name.length > 0 ? 'register-input__error' : ''
            }`}
            id="name"
            name="name"
            type="text"
            required
            autoComplete="on"
            pattern="[a-zA-Zа-яА-ЯёЁ\s\-]+"
          />
          <span className="register-input-error">{formErrors.name}</span>
          <label className="register-label" htmlFor="email">
            E-mail
          </label>
          <input
            onChange={handleChange}
            className={`register-input ${
              formErrors.email.length > 0 ? 'register-input__error' : ''
            }`}
            id="email"
            name="email"
            type="email"
            required
            autoComplete="on"
          />
          <span className="register-input-error">{formErrors.email}</span>
          <label className="register-label" htmlFor="password">
            Пароль
          </label>
          <input
            onChange={handleChange}
            className={`register-input ${
              formErrors.password.length > 0 ? 'register-input__error' : ''
            }`}
            id="password"
            name="password"
            type="password"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="register-input-error">{formErrors.password}</span>
        </div>
        <Error
          isActive={isErrorVisible}
          text={
            errorStatus === 409
              ? 'Пользователь с таким email уже существует.'
              : 'При регистрации пользователя произошла ошибка.'
          }
        />
        <button
          onClick={handleSubmit}
          className={`register-submit-button ${
            isFormValid ? '' : 'register-submit-button_disabled'
          }`}
          type="submit"
          disabled={!isFormValid}
        >
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
