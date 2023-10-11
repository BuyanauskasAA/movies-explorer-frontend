import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards }) {
  const cardsList = cards.map((card) => (
    <li key={card._id}>
      <MoviesCard card={card} />
    </li>
  ));

  return (
    <section className="movies-card-list">
      {cardsList.length > 0 ? (
        <ul className="movies-card-list__container">{cardsList}</ul>
      ) : (
        <h2 className="movies-card-list__not-found">Без результатов поиска</h2>
      )}
      <button
        className={`movies-card-list__load-more-button ${
          cardsList.lenght > 11 ? 'movies-card-list__load-more-button_active' : ''
        }`}
        type="button"
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
