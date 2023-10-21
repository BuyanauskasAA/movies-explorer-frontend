import React from 'react';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ onLogout, onUpdate, isErrorVisible, errorStatus, isUpdateSucceed }) {
  const user = React.useContext(CurrentUserContext);
  const [isEditionEnable, setEditionEnable] = React.useState(false);
  const [formValue, setFormValue] = React.useState({ name: '', email: '' });
  const [formErrors, setFormErrors] = React.useState({ name: '', email: '' });
  const [isFormValid, setFormValid] = React.useState(false);
  const [isFormValueChanged, setFormValuesChanged] = React.useState(false);
  const formSubmitButton = React.useRef();

  React.useEffect(() => {
    setFormValue({ name: user.name, email: user.email });
  }, [user]);

  React.useEffect(() => {
    handleFormValueChanged();
  });

  React.useEffect(() => {
    function handleEscapeClose(event) {
      if (event.key === 'Escape') {
        setEditionEnable(false);
      }
    }

    if (isEditionEnable) {
      document.addEventListener('keydown', handleEscapeClose);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [isEditionEnable]);

  function handleChange(event) {
    const target = event.target;
    const { name, value } = target;
    setFormValue({ ...formValue, [name]: value });
    setFormErrors({ ...formErrors, [name]: target.validationMessage });
    setFormValid(target.closest('form').checkValidity());
  }

  function handleSubmit(event) {
    event.preventDefault();

    onUpdate(formValue, formSubmitButton.current);
    setEditionEnable(false);
  }

  function handleEditionEnable() {
    setEditionEnable(true);
  }

  function handleFormValueChanged() {
    if (user.name !== formValue.name || user.email !== formValue.email) {
      setFormValuesChanged(true);
    } else {
      setFormValuesChanged(false);
    }
  }

  return (
    <main className="profile">
      <form className="profile__form">
        <h1 className="profile__title">{`Привет, ${user.name}!`}</h1>
        <span className="profile-input-error">{formErrors.name}</span>
        <label className="profile__input-container">
          <span className="profile__label">Имя</span>
          <input
            onChange={handleChange}
            className="profile__input"
            name="name"
            type="text"
            pattern="[a-zA-Zа-яА-ЯёЁ\s\-]+"
            required
            autoComplete="on"
            value={formValue.name}
            disabled={!isEditionEnable}
          />
        </label>
        <label className="profile__input-container">
          <span className="profile__label">E-mail</span>
          <input
            onChange={handleChange}
            className="profile__input"
            name="email"
            type="email"
            pattern="[a-zA-Z0-9\.\-_]+@[a-zA-Z0-9\.\-_]+\.[a-zA-Z0-9\-_]+"
            required
            autoComplete="on"
            value={formValue.email}
            disabled={!isEditionEnable}
          />
        </label>
        <span className="profile-input-error">{formErrors.email}</span>
        <span
          className={`profile-form-update ${isUpdateSucceed ? 'profile-form-update_active' : ''}`}
        >
          Данные пользователя успешно обновлены
        </span>
        <span className={`profile-form-error ${isErrorVisible ? 'profile-form-error_active' : ''}`}>
          {errorStatus === 409
            ? 'Пользователь с таким email уже существует'
            : 'При обновлении профиля произошла ошибка'}
        </span>
        {isEditionEnable && (
          <button
            ref={formSubmitButton}
            onClick={handleSubmit}
            className={`profile__submit-button ${
              isFormValid && isFormValueChanged ? '' : 'profile__submit-button_disabled'
            }`}
            type="submit"
            disabled={!isFormValid || !isFormValueChanged}
          >
            Сохранить
          </button>
        )}
      </form>
      {!isEditionEnable && (
        <div className="profile__button-container">
          <button onClick={handleEditionEnable} className="profile__edit-button" type="button">
            Редактировать
          </button>
          <button onClick={onLogout} className="profile__logout-button" type="button">
            Выйти из аккаунта
          </button>
        </div>
      )}
    </main>
  );
}

export default Profile;
