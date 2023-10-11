import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ card }) {
  const { pathname } = useLocation();
  const { imageLink, name, duration, isSaved } = card;
  const formatTime = (minutes) => `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;

  return (
    <figure className="movies-card">
      {pathname === '/movies' &&
        (isSaved ? (
          <button
            className="movies-card__unsave-button"
          ></button>
        ) : (
          <button
            className="movies-card__save-button"
            type="button"
          >
            Сохранить
          </button>
        ))}
      {pathname === '/saved-movies' && <button  className ='movies-card__delete-button' type="button"></button>}
      <img className="movies-card__image" src={imageLink} alt={name} />
      <figcaption className="movies-card__caption">
        <p className="movies-card__title">{name}</p>
        <p className="movies-card__duration">{formatTime(duration)}</p>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;
