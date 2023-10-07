import './Movies.css';
import moviesList from '../../utils/movies-list';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList cards={moviesList} />
    </main>
  );
}

export default Movies;
