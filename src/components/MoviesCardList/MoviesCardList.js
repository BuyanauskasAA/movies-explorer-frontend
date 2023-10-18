import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';

function MoviesCardList({ cards, isLoading, isNotFound, isErrorVisible }) {
  const cardsList = cards.map((card) => (
    <li key={card.id}>
      <MoviesCard card={card} />
    </li>
  ));

  return (
    <section className="movies-card-list">
      {isNotFound && <h2 className="movies-card-list__not-found">Ничего не найдено</h2>}
      {isLoading && <Preloader />}
      {cardsList.length > 0 && <ul className="movies-card-list__container">{cardsList}</ul>}
      <Error
        isActive={isErrorVisible}
        text="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
      />
      {/* <button className="movies-card-list__load-more-button" type="button">
        Ещё
      </button> */}
    </section>
  );
}

export default MoviesCardList;
