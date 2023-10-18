import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ card }) {
  const { pathname } = useLocation();
  const formatTime = (minutes) => `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;

  return (
    <figure className="movies-card">
      {pathname === '/movies' &&
        (false ? (
          <button className="movies-card__unsave-button"></button>
        ) : (
          <button className="movies-card__save-button" type="button">
            Сохранить
          </button>
        ))}
      {pathname === '/saved-movies' && (
        <button className="movies-card__delete-button" type="button"></button>
      )}
      <a href={card.trailerLink}>
        <img
          className="movies-card__image"
          src={`https://api.nomoreparties.co${card.image.url}`}
          alt={card.nameRU}
        />
      </a>
      <figcaption className="movies-card__caption">
        <p className="movies-card__title">{card.nameRU}</p>
        <p className="movies-card__duration">{formatTime(card.duration)}</p>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;
