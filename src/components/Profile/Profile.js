import React from 'react';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ onLogout, onUpdate, isErrorVisible, errorStatus }) {
  const user = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setFormValue({ name: user.name, email: user.email });
  }, []);

  const [isEditionEnable, setEditionEnable] = React.useState(false);
  const [formValue, setFormValue] = React.useState({});
  const [formErrors, setFormErrors] = React.useState({ name: '', email: '' });
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

    onUpdate(formValue);
    setEditionEnable(false);
  }

  function handleEditionEnable() {
    setEditionEnable(true);
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
            required
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
            pattern="[a-zA-Z0-9\.\-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+"
            required
            value={formValue.email}
            disabled={!isEditionEnable}
          />
        </label>
        <span className="profile-input-error">{formErrors.email}</span>
        <span className={`profile-form-error ${isErrorVisible ? 'profile-form-error_active' : ''}`}>
          asdasdasdas
        </span>
        {isEditionEnable && (
          <button
            onClick={handleSubmit}
            className={`profile__submit-button ${
              isFormValid ? '' : 'profile__submit-button_disabled'
            }`}
            type="submit"
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
