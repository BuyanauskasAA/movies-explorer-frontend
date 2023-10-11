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
          <a className="techs__link" href="https://html.spec.whatwg.org/">
            HTML
          </a>
        </li>
        <li className="techs__item">
          <a className="techs__link" href="https://www.w3.org/Style/CSS/">
            CSS
          </a>
        </li>
        <li className="techs__item">
          <a className="techs__link" href="https://www.javascript.com/">
            JS
          </a>
        </li>
        <li className="techs__item">
          <a className="techs__link" href="https://react.dev/">
            React
          </a>
        </li>
        <li className="techs__item">
          <a className="techs__link" href="https://git-scm.com/">
            Git
          </a>
        </li>
        <li className="techs__item">
          <a className="techs__link" href="https://expressjs.com/">
            Express.js
          </a>
        </li>
        <li className="techs__item">
          <a className="techs__link" href="https://www.mongodb.com/">
            mongoDB
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
