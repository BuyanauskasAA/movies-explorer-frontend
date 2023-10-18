import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';

function MoviesCardList({ cards, isLoading, isNotFound, isErrorVisible }) {
  const [initialCardsCount, setInitialCardsCount] = React.useState(0);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) {
        setInitialCardsCount(12);
      } else if (window.innerWidth < 768) {
        setInitialCardsCount(5);
      } else {
        setInitialCardsCount(8);
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [cards]);

  function handleShowMore() {
    if (window.innerWidth >= 1280) {
      setInitialCardsCount(initialCardsCount + 3);
    } else if (window.innerWidth < 768) {
      setInitialCardsCount(initialCardsCount + 1);
    } else {
      setInitialCardsCount(initialCardsCount + 2);
    }
  }

  const cardsList = cards.slice(0, initialCardsCount).map((card) => (
    <li key={card.id}>
      <MoviesCard card={card} />
    </li>
  ));

  let isButtonVisible;

  if (cards.length > initialCardsCount) {
    isButtonVisible = true;
  } else {
    isButtonVisible = false;
  }

  return (
    <section onResize={() => console.log(window.innerWidth)} className="movies-card-list">
      {isNotFound && <h2 className="movies-card-list__not-found">Ничего не найдено</h2>}
      {isLoading && <Preloader />}
      {cardsList.length > 0 && <ul className="movies-card-list__container">{cardsList}</ul>}
      <Error
        isActive={isErrorVisible}
        text="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
      />
      <button
        onClick={handleShowMore}
        className={`movies-card-list__load-more-button ${
          isButtonVisible ? 'movies-card-list__load-more-button_active' : ''
        }`}
        type="button"
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
