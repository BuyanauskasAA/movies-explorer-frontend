import './SavedMovies.css';
import moviesList from '../../utils/movies-list';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  const savedMoviesList = moviesList.filter((movie) => movie.isSaved);

  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList cards={savedMoviesList} />
    </main>
  );
}

export default SavedMovies;
