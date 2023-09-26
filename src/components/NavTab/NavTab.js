import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__container">
        <li className="nav-tab__item">
          <Link className="nav-tab__link" to="#about">
            О проекте
          </Link>
        </li>
        <li className="nav-tab__item">
          <Link className="nav-tab__link" to="#technology">
            Технологии
          </Link>
        </li>
        <li className="nav-tab__item">
          <Link className="nav-tab__link" to="#student">
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
