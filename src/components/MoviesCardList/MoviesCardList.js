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
      <ul className="movies-card-list__container">{cardsList}</ul>
      <button className='movies-card-list__load-more-button' type="button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
