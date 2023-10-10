import React from 'react';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile() {
  const { name, email } = React.useContext(CurrentUserContext);

  return (
    <main className="profile">
      <form className="profile__form">
        <h1 className="profile__title">{`Привет, ${name}!`}</h1>
        <label className="profile__input-container">
          <span className="profile__label">Имя</span>
          <input className="profile__input" name="name" type="text" placeholder={name} />
        </label>
        <label className="profile__input-container">
          <span className="profile__label">E-mail</span>
          <input className="profile__input" name="email" type="email" placeholder={email} />
        </label>
        <button className="profile__submit-button" type="submit">
          Сохранить
        </button>
      </form>
      <div className="profile__button-container">
        <button className="profile__edit-button profile__edit-button_active" type="button">
          Редактировать
        </button>
        <button className="profile__logout-button profile__logout-button_active" type="button">
          Выйти из аккаунта
        </button>
      </div>
    </main>
  );
}

export default Profile;
