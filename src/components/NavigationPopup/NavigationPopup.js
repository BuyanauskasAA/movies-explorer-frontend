import './NavigationPopup.css';
import { NavLink, Link } from 'react-router-dom';

function NavigationPopup({ isOpened, onClose }) {
  function handleOverlayClose(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <section
      onClick={handleOverlayClose}
      className={`navigation-popup ${isOpened ? 'navigation-popup_opened' : ''}`}
    >
      <div className="navigation-popup__container">
        <button onClick={onClose} className="navigation-popup__close-button"></button>
        <ul className="navigation-popup__list">
          <li className="navigation-popup__item">
            <NavLink
              onClick={onClose}
              to="/"
              className={({ isActive }) =>
                `${isActive ? 'navigation-popup__link_active' : 'navigation-popup__link'} `
              }
            >
              Главная
            </NavLink>
          </li>
          <li className="navigation-popup__item">
            <NavLink
              onClick={onClose}
              to="/movies"
              className={({ isActive }) =>
                `${isActive ? 'navigation-popup__link_active' : 'navigation-popup__link'} `
              }
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation-popup__item">
            <NavLink
              onClick={onClose}
              to="/saved-movies"
              className={({ isActive }) =>
                `${isActive ? 'navigation-popup__link_active' : 'navigation-popup__link'} `
              }
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link to="/profile" className="navigation-popup__link navigation-popup__link_type_profile">
          Аккаунт
        </Link>
      </div>
    </section>
  );
}

export default NavigationPopup;
