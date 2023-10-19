import React from 'react';
import './SavedMoviesList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMoviesList({ isNotFound, cards, onMovieCardRemove }) {
  const cardsList = cards.map((card) => (
      <li key={card._id}>
        <MoviesCard
          card={card}
          onMovieCardRemove={onMovieCardRemove}
        />
      </li>
    ));

  return (
    <section className="saved-movies-list">
      {isNotFound && <h2 className="saved-movies-list__not-found">Ничего не найдено</h2>}
      {cardsList.length > 0 && <ul className="saved-movies-list__container">{cardsList}</ul>}
    </section>
  );
}

export default SavedMoviesList;