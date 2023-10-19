import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesList from '../SavedMoviesList/SavedMoviesList';

function SavedMovies({
  savedMoviesList,
  isNotFound,
  onMovieCardRemove,
  isShortFilmFilterOn,
  onShortFilmFilterChange,
  onSearchFormSubmit,
}) {
  return (
    <main className="movies">
      <SearchForm
        isShortFilmFilterOn={isShortFilmFilterOn}
        onFilter={onShortFilmFilterChange}
        onSearchFormSubmit={onSearchFormSubmit}
      />
      <SavedMoviesList
        cards={savedMoviesList}
        isNotFound={isNotFound}
        onMovieCardRemove={onMovieCardRemove}
      />
    </main>
  );
}

export default SavedMovies;
