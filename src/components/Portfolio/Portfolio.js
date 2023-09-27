import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/BuyanauskasAA/how-to-learn">
            <p className="portfolio__title">Статичный сайт</p>
            <div className="portfolio__arrow"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/BuyanauskasAA/russian-travel">
            <p className="portfolio__title">Адаптивный сайт</p>
            <div className="portfolio__arrow"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/BuyanauskasAA/react-mesto-api-full-gha"
          >
            <p className="portfolio__title">Одностраничное приложение</p>
            <div className="portfolio__arrow"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
