import './Register.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import FormInput from '../FormInput/FormInput';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import Error from '../Error/Error';

function Register() {
  return (
    <main className="register">
      <Logo />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <div className="register__container">
          <FormInput name="name" type="text" text="Имя" />
          <FormInput name="email" type="email" text="E-mail" />
          <FormInput name="password" type="password" text="Пароль" />
        </div>
        <Error isActive={false} text="Пользователь с таким email уже существует." />
        <FormSubmitButton text="Зарегистрироваться" />
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
