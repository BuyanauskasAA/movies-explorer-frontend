import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__container">
        <li className="nav-tab__item">
          <a className="nav-tab__link" href="#about-project">
            О проекте
          </a>
        </li>
        <li className="nav-tab__item">
          <a className="nav-tab__link" href="#techs">
            Технологии
          </a>
        </li>
        <li className="nav-tab__item">
          <a className="nav-tab__link" href="#about-me">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
