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
                `navigation-popup__link ${isActive ? 'navigation-popup__link_active' : ''}`
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
                `navigation-popup__link ${isActive ? 'navigation-popup__link_active' : ''}`
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
                `navigation-popup__link ${isActive ? 'navigation-popup__link_active' : ''} `
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
