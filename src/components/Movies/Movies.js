import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
  onShortFilmFilterChange,
  isShortFilmFilterOn,
  onSearchFormSubmit,
  moviesList,
  savedMoviesList,
  isLoading,
  isNotFound,
  isErrorVisible,
  onMovieCardSave,
  onMovieCardRemove,
}) {
  return (
    <main className="movies">
      <SearchForm
        isShortFilmFilterOn={isShortFilmFilterOn}
        onFilter={onShortFilmFilterChange}
        onSearchFormSubmit={onSearchFormSubmit}
      />
      <MoviesCardList
        cards={moviesList}
        savedCards={savedMoviesList}
        isLoading={isLoading}
        isNotFound={isNotFound}
        isErrorVisible={isErrorVisible}
        onMovieCardSave={onMovieCardSave}
        onMovieCardRemove={onMovieCardRemove}
      />
    </main>
  );
}

export default Movies;
