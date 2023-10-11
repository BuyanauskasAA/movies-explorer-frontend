import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `navigation__link ${isActive ? 'navigation__link_active' : ''}`
            }
          >
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `navigation__link ${isActive ? 'navigation__link_active' : ''}`
            }
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <Link className="navigation__link navigation__link_type_account" to="/profile">
        Аккаунт
      </Link>
    </nav>
  );
}

export default Navigation;
