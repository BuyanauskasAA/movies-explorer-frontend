import './MoviesCard.css';

function MoviesCard({ card }) {
  const { imageLink, name, duration, isSaved } = card;

  const formatTime = (minutes) => `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;

  return (
    <figure className="movies-card">
      {isSaved ? (
        <button
          className="movies-card__save-button movies-card__save-button_saved"
          type="button"
        ></button>
      ) : (
        <button className="movies-card__save-button movies-card__save-button_unsaved" type="button">
          Сохранить
        </button>
      )}
      <img className="movies-card__image" src={imageLink} alt={name} />
      <figcaption className="movies-card__caption">
        <p className="movies-card__title">{name}</p>
        <p className="movies-card__duration">{formatTime(duration)}</p>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;
