import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';
import { getMoviesError } from '../../utils/error-messages-handler';
import { shortFilmDuration } from '../../utils/short-film-duration';
import { cardsPerPage, addMoreCardsCount } from '../../utils/cards-count-config';

function MoviesCardList({
  cards,
  isLoading,
  isNotFound,
  isErrorVisible,
  onMovieCardSave,
  savedCards,
  onMovieCardRemove,
  isShortFilmFilterOn,
}) {
  const [initialCardsCount, setInitialCardsCount] = React.useState(0);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) {
        setInitialCardsCount(cardsPerPage.onLargeResolution);
      } else if (window.innerWidth < 768) {
        setInitialCardsCount(cardsPerPage.onSmallResolution);
      } else {
        setInitialCardsCount(cardsPerPage.onMiddleResolution);
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  function handleShowMore() {
    if (window.innerWidth >= 1280) {
      setInitialCardsCount(initialCardsCount + addMoreCardsCount.onLargeResolution);
    } else if (window.innerWidth < 768) {
      setInitialCardsCount(initialCardsCount + addMoreCardsCount.onSmallResolution);
    } else {
      setInitialCardsCount(initialCardsCount + addMoreCardsCount.onMiddleResolution);
    }
  }

  const likedCards = savedCards.map((card) => card.movieId);

  const cardsList = isShortFilmFilterOn
    ? cards
        .filter((card) => card.duration <= shortFilmDuration)
        .slice(0, initialCardsCount)
        .map((card) => {
          card.isLiked = likedCards.includes(card.id);
          return (
            <li key={card.id}>
              <MoviesCard
                card={card}
                onMovieCardSave={onMovieCardSave}
                onMovieCardRemove={onMovieCardRemove}
              />
            </li>
          );
        })
    : cards.slice(0, initialCardsCount).map((card) => {
        card.isLiked = likedCards.includes(card.id);
        return (
          <li key={card.id}>
            <MoviesCard
              card={card}
              onMovieCardSave={onMovieCardSave}
              onMovieCardRemove={onMovieCardRemove}
            />
          </li>
        );
      });

  let isButtonVisible;

  if (isShortFilmFilterOn) {
    if (cards.filter((card) => card.duration <= shortFilmDuration).length > initialCardsCount) {
      isButtonVisible = true;
    } else {
      isButtonVisible = false;
    }
  } else {
    if (cards.length > initialCardsCount) {
      isButtonVisible = true;
    } else {
      isButtonVisible = false;
    }
  }

  return (
    <section className="movies-card-list">
      {isNotFound && <h2 className="movies-card-list__not-found">Ничего не найдено</h2>}
      {isLoading && <Preloader />}
      {cardsList.length > 0 && <ul className="movies-card-list__container">{cardsList}</ul>}
      <Error isActive={isErrorVisible} text={getMoviesError} />
      {isButtonVisible && (
        <button
          onClick={handleShowMore}
          className="movies-card-list__load-more-button"
          type="button"
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
