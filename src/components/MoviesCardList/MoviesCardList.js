import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards }) {
  const { pathname } = useLocation();
  const cardsList = cards.map((card) => (
    <li key={card._id}>
      <MoviesCard card={card} />
    </li>
  ));

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">{cardsList}</ul>
      <button
        className={`movies-card-list__load-more-button ${
          cardsList > 11 ? 'movies-card-list__load-more-button_active' : ''
        }`}
        type="button"
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
