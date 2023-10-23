import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { baseUrl } from '../../utils/MoviesApi';

function MoviesCard({ card, onMovieCardSave, onMovieCardRemove }) {
  const { pathname } = useLocation();
  const formatTime = (minutes) => `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;
  const url = pathname === '/movies' ? baseUrl : '';
  const imageSrc = pathname === '/movies' ? `${url}${card.image.url}` : card.image;
  const cardId = pathname === '/movies' ? card.id : card._id;

  function handleSaveCard() {
    onMovieCardSave({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: `${url}${card.image.url}`,
      trailerLink: card.trailerLink,
      thumbnail: `${url}${card.image.formats.thumbnail.url}`,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
    });
  }

  function handleRemoveCard() {
    onMovieCardRemove(cardId);
  }

  return (
    <figure className="movies-card">
      {pathname === '/movies' &&
        (card.isLiked ? (
          <button onClick={handleRemoveCard} className="movies-card__unsave-button"></button>
        ) : (
          <button onClick={handleSaveCard} className="movies-card__save-button" type="button">
            Сохранить
          </button>
        ))}
      {pathname === '/saved-movies' && (
        <button
          onClick={handleRemoveCard}
          className="movies-card__delete-button"
          type="button"
        ></button>
      )}
      <a href={card.trailerLink}>
        <img className="movies-card__image" src={imageSrc} alt={card.nameRU} />
      </a>
      <figcaption className="movies-card__caption">
        <p className="movies-card__title">{card.nameRU}</p>
        <p className="movies-card__duration">{formatTime(card.duration)}</p>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;
