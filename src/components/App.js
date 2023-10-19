import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../contexts/CurrentUserContext';
import AuthContext from '../contexts/AuthContext';
import { getMoviesList } from '../utils/MoviesApi';
import { signUp, saveMovie } from '../utils/MainApi';

function App() {
  const [isNavigationPopupOpen, setNavigationPopupOpen] = React.useState(false);
  const [isShortFilmFilterOn, setShortFilmFilterOn] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [isNotFound, setNotFound] = React.useState(false);
  const [isSearchErrorVisible, setSearchErrorVisible] = React.useState(false);
  const [isRegisterErrorVisible, setRegisterErrorVisible] = React.useState(false);
  const [registerErrorStatus, setRegisterErrorStatus] = React.useState(0);
  const [moviesList, setMoviesList] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const navigate = useNavigate();

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
    if (localStorage.getItem('isNotFound') !== null) {
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
        setSearchErrorVisible(true);
      })
      .finally(() => setLoading(false));
  }

  function handleMovieCardSave(movieInfo) {
    saveMovie(movieInfo)
      .then((movie) => console.log(movie))
      .catch(console.error);
  }

  function handleRegister(userInfo) {
    signUp(userInfo)
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setRegisterErrorStatus(error.status);
        setRegisterErrorVisible(true);
      });
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
                  <ProtectedRoute
                    element={Header}
                    onPopupOpen={openNavigationPopup}
                    loggedIn={loggedIn}
                  />
                  <ProtectedRoute element={Main} loggedIn={loggedIn} />
                  <ProtectedRoute element={Footer} loggedIn={loggedIn} />
                </>
              }
            />
            <Route
              path="/movies"
              element={
                <>
                  <ProtectedRoute
                    element={Header}
                    onPopupOpen={openNavigationPopup}
                    loggedIn={loggedIn}
                  />
                  <ProtectedRoute
                    element={Movies}
                    onShortFilmFilterChange={setShortFilmFilterOn}
                    isShortFilmFilterOn={isShortFilmFilterOn}
                    onSearchFormSubmit={handleSearchFormSubmit}
                    moviesList={moviesList}
                    isLoading={isLoading}
                    isNotFound={isNotFound}
                    isErrorVisible={isSearchErrorVisible}
                    onMovieCardSave={handleMovieCardSave}
                    loggedIn={loggedIn}
                  />
                  <ProtectedRoute element={Footer} loggedIn={loggedIn} />
                </>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <>
                  <ProtectedRoute
                    element={Header}
                    onPopupOpen={openNavigationPopup}
                    loggedIn={loggedIn}
                  />
                  <ProtectedRoute element={SavedMovies} loggedIn={loggedIn} />
                  <ProtectedRoute element={Footer} loggedIn={loggedIn} />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <ProtectedRoute
                    element={Header}
                    onPopupOpen={openNavigationPopup}
                    loggedIn={loggedIn}
                  />
                  <ProtectedRoute element={Profile} loggedIn={loggedIn} />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  onRegister={handleRegister}
                  isErrorVisible={isRegisterErrorVisible}
                  registerErrorStatus={registerErrorStatus}
                />
              }
            />
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
