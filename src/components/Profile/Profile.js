import React from 'react';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile() {
  const { name, email } = React.useContext(CurrentUserContext);

  return (
    <main className="profile">
      <h1 className="profile__title">{`Привет, ${name}!`}</h1>
      <form className="profile__form">
        <div className="profile__form-container">
          <label className="profile__input-container">
            <span className="profile__label">Имя</span>
            <input className="profile__input" name="name" type="text" placeholder={name} />
          </label>
          <label className="profile__input-container">
            <span className="profile__label">E-mail</span>
            <input className="profile__input" name="email" type="email" placeholder={email} />
          </label>
        </div>
        <button className="profile__submit-button" type="submit">
          Редактировать
        </button>
      </form>
      <button className="profile__logout-button" type="button">
        Выйти из аккаунта
      </button>
    </main>
  );
}

export default Profile;
