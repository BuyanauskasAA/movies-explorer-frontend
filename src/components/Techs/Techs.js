import './Techs.css';
import SectionHeader from '../SectionHeader/SectionHeader';

function Techs() {
  return (
    <section id="techs" className="techs">
      <SectionHeader text="Технологии" />
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__item">
          <a
            className="techs__link"
            href="https://html.spec.whatwg.org/"
            target="_blank"
            rel="noreferrer"
          >
            HTML
          </a>
        </li>
        <li className="techs__item">
          <a
            className="techs__link"
            href="https://www.w3.org/Style/CSS/"
            target="_blank"
            rel="noreferrer"
          >
            CSS
          </a>
        </li>
        <li className="techs__item">
          <a
            className="techs__link"
            href="https://www.javascript.com/"
            target="_blank"
            rel="noreferrer"
          >
            JS
          </a>
        </li>
        <li className="techs__item">
          <a
            className="techs__link"
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
          >
            React
          </a>
        </li>
        <li className="techs__item">
          <a
            className="techs__link"
            href="https://git-scm.com/"
            target="_blank"
            rel="noreferrer"
          >
            Git
          </a>
        </li>
        <li className="techs__item">
          <a
            className="techs__link"
            href="https://expressjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            Express.js
          </a>
        </li>
        <li className="techs__item">
          <a
            className="techs__link"
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noreferrer"
          >
            mongoDB
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
