import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Footer from './Footer/Footer';
import Register from './Register/Register';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import PageNotFound from './PageNotFound/PageNotFound';
import NavigationPopup from './NavigationPopup/NavigationPopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import AuthContext from '../contexts/AuthContext';
import { getMoviesList } from '../utils/MoviesApi';

function App() {
  const [isNavigationPopupOpen, setNavigationPopupOpen] = React.useState(false);
  const [isShortFilmFilterOn, setShortFilmFilterOn] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [isNotFound, setNotFound] = React.useState(false);
  const [isErrorVisible, setErrorVisible] = React.useState(false)
  const [moviesList, setMoviesList] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });

  React.useEffect(() => {
    function handleEscapeClose(event) {
      if (event.key === 'Escape') {
        closeNavigationPopup();
      }
    }

    if (isNavigationPopupOpen) {
      document.addEventListener('keydown', handleEscapeClose);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [isNavigationPopupOpen]);

  React.useEffect(() => {
    if (localStorage.getItem('isNotFound') !== null) {;
      setNotFound(JSON.parse(localStorage.getItem('isNotFound')));
    }

    if (localStorage.getItem('moviesList') !== null) {
      setMoviesList(JSON.parse(localStorage.getItem('moviesList')));
    }

    if (localStorage.getItem('isShortFilmFilterOn') !== null) {
      setShortFilmFilterOn(JSON.parse(localStorage.getItem('isShortFilmFilterOn')));
    }
  }, []);

  function openNavigationPopup() {
    setNavigationPopupOpen(true);
  }

  function closeNavigationPopup() {
    setNavigationPopupOpen(false);
  }

  function handleSearchFormSubmit(request, isShortFilm) {
    setLoading(true);
    setNotFound(false);
    localStorage.setItem('isNotFound', false);
    setMoviesList([]);
    getMoviesList()
      .then((movies) => {
        const filteredMovies = isShortFilm
          ? movies.filter(
              (movie) =>
                movie.nameRU.toLowerCase().includes(request.toLowerCase()) && movie.duration <= 52
            )
          : movies.filter((movie) => movie.nameRU.toLowerCase().includes(request.toLowerCase()));

        if (filteredMovies.length === 0) {
          setNotFound(true);
          localStorage.setItem('isNotFound', true);
        }

        setMoviesList(filteredMovies);
        localStorage.setItem('moviesList', JSON.stringify(filteredMovies));
      })
      .catch(() => {
        setErrorVisible(true);
      })
      .finally(() => setLoading(false));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AuthContext.Provider value={loggedIn}>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header onPopupOpen={openNavigationPopup} />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route
              path="/movies"
              element={
                <>
                  <Header onPopupOpen={openNavigationPopup} />
                  <Movies
                    onShortFilmFilterChange={setShortFilmFilterOn}
                    isShortFilmFilterOn={isShortFilmFilterOn}
                    onSearchFormSubmit={handleSearchFormSubmit}
                    moviesList={moviesList}
                    isLoading={isLoading}
                    isNotFound={isNotFound}
                    isErrorVisible={isErrorVisible}
                  />
                  <Footer />
                </>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <>
                  <Header onPopupOpen={openNavigationPopup} />
                  <SavedMovies />
                  <Footer />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Header onPopupOpen={openNavigationPopup} />
                  <Profile />
                </>
              }
            />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <NavigationPopup isOpened={isNavigationPopupOpen} onClose={closeNavigationPopup} />
        </div>
      </AuthContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
