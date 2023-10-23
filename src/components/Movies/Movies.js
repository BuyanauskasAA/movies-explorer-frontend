import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
  onShortFilmFilterChange,
  isShortFilmFilterOn,
  moviesList,
  savedMoviesList,
  isLoading,
  isNotFound,
  isErrorVisible,
  onMovieCardSave,
  onMovieCardRemove,
  onMoviesSearch,
  onMoviesSearchApi,
  setNotFound,
  setFilteredMoviesList,
}) {
  React.useEffect(() => {
    if (localStorage.getItem('isNotFound') !== null) {
      setNotFound(JSON.parse(localStorage.getItem('isNotFound')));
    }

    if (localStorage.getItem('moviesList') !== null) {
      setFilteredMoviesList(JSON.parse(localStorage.getItem('moviesList')));
    }

    if (localStorage.getItem('isShortFilmFilterOn') !== null) {
      onShortFilmFilterChange(JSON.parse(localStorage.getItem('isShortFilmFilterOn')));
    }
  }, []);

  return (
    <main className="movies">
      <SearchForm
        isShortFilmFilterOn={isShortFilmFilterOn}
        onFilter={onShortFilmFilterChange}
        onMoviesSearch={onMoviesSearch}
        onMoviesSearchApi={onMoviesSearchApi}
      />
      <MoviesCardList
        cards={moviesList}
        savedCards={savedMoviesList}
        isLoading={isLoading}
        isNotFound={isNotFound}
        isErrorVisible={isErrorVisible}
        onMovieCardSave={onMovieCardSave}
        onMovieCardRemove={onMovieCardRemove}
        isShortFilmFilterOn={isShortFilmFilterOn}
      />
    </main>
  );
}

export default Movies;
