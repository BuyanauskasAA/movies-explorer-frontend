import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
  onShortFilmFilterChange,
  isShortFilmFilterOn,
  onSearchFormSubmit,
  moviesList,
  isLoading,
  isNotFound,
  isErrorVisible,
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
        isLoading={isLoading}
        isNotFound={isNotFound}
        isErrorVisible={isErrorVisible}
      />
    </main>
  );
}

export default Movies;
