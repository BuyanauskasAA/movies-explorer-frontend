import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesList from '../SavedMoviesList/SavedMoviesList';

function SavedMovies({
  filteredSavedMoviesList,
  isNotFound,
  onMovieCardRemove,
  isShortFilmFilterOn,
  onShortFilmFilterChange,
  onSearchFormSubmit,
  savedMoviesList,
  setFilteredSavedMoviesList,
  setNotFoundSavedMovies,
}) {
  React.useEffect(() => {
    return () => {
      setFilteredSavedMoviesList(savedMoviesList);
      onShortFilmFilterChange(false);
      setNotFoundSavedMovies(false);
    };
  }, []);

  return (
    <main className="movies">
      <SearchForm
        isShortFilmFilterOn={isShortFilmFilterOn}
        onFilter={onShortFilmFilterChange}
        onMoviesSearch={onSearchFormSubmit}
      />
      <SavedMoviesList
        isShortFilmFilterOn={isShortFilmFilterOn}
        cards={filteredSavedMoviesList}
        isNotFound={isNotFound}
        onMovieCardRemove={onMovieCardRemove}
      />
    </main>
  );
}

export default SavedMovies;
