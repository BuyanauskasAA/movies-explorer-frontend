import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import AuthorizedRoute from './AuthorizedRoute/AuthorizedRoute';
import CurrentUserContext from '../contexts/CurrentUserContext';
import AuthContext from '../contexts/AuthContext';
import { getMoviesList } from '../utils/MoviesApi';
import {
  signUp,
  saveMovie,
  signIn,
  getUser,
  signOut,
  updateUser,
  getMovies,
  deleteMovie,
} from '../utils/MainApi';

function App() {
  const [isNavigationPopupOpen, setNavigationPopupOpen] = React.useState(false);
  const [isShortFilmFilterOn, setShortFilmFilterOn] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [isNotFound, setNotFound] = React.useState(false);
  const [isSearchErrorVisible, setSearchErrorVisible] = React.useState(false);
  const [isRegisterErrorVisible, setRegisterErrorVisible] = React.useState(false);
  const [registerErrorStatus, setRegisterErrorStatus] = React.useState(0);
  const [isLoginErrorVisible, setLoginErrorVisible] = React.useState(false);
  const [loginErrorStatus, setLoginErrorStatus] = React.useState(0);
  const [isProfileErrorVisible, setProfileErrorVisible] = React.useState(false);
  const [profileErrorStatus, setProfileErrorStatus] = React.useState(0);
  const [moviesList, setMoviesList] = React.useState([]);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [filteredSavedMoviesList, setFilteredSavedMoviesList] = React.useState([]);
  const [isUpdateSucceed, setUpdateSucceed] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const navigate = useNavigate();
  const { pathname } = useLocation();
  localStorage.setItem('lastRoute', pathname);

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLoggedIn);
    handleNavigate();

    getUser()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((error) => console.log(`Ошибка ${error}`));
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      getMovies().then((movies) => {
        setSavedMoviesList(movies);
        setFilteredSavedMoviesList(movies);
      });
    }
  }, [loggedIn]);

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
    if (pathname === '/movies' && localStorage.getItem('isNotFound') !== null) {
      setNotFound(JSON.parse(localStorage.getItem('isNotFound')));
    }

    if (pathname === '/movies' && localStorage.getItem('moviesList') !== null) {
      setMoviesList(JSON.parse(localStorage.getItem('moviesList')));
    }

    if (pathname === '/movies' && localStorage.getItem('isShortFilmFilterOn') !== null) {
      setShortFilmFilterOn(JSON.parse(localStorage.getItem('isShortFilmFilterOn')));
    }
  }, []);

  function handleNavigate() {
    localStorage.setItem('lastRoute', pathname);
    navigate(localStorage.getItem('lastRoute'), { replace: true });
  }

  function openNavigationPopup() {
    setNavigationPopupOpen(true);
  }

  function closeNavigationPopup() {
    setNavigationPopupOpen(false);
  }

  function filterMovies(movies, request, isShort) {
    return isShort
      ? movies.filter(
          (movie) =>
            (movie.nameRU.toLowerCase().includes(request.toLowerCase()) && movie.duration <= 40) ||
            (movie.nameEN.toLowerCase().includes(request.toLowerCase()) && movie.duration <= 40)
        )
      : movies.filter(
          (movie) =>
            movie.nameRU.toLowerCase().includes(request.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(request.toLowerCase())
        );
  }

  function handleMoviesSearch(request, isShort) {
    setNotFound(false);
    setLoading(true);
    localStorage.setItem('isNotFound', false);
    setMoviesList([]);
    getMoviesList()
      .then((movies) => {
        const filteredMovies = filterMovies(movies, request, isShort);

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

  function handleSavedMoviesSearch(request, isShort) {
    setNotFound(false);
    const filteredMovies = filterMovies(savedMoviesList, request, isShort);

    if (filteredMovies.length === 0) {
      setNotFound(true);
    }

    setFilteredSavedMoviesList(filteredMovies);
  }

  function handleRegister(userInfo) {
    signUp(userInfo)
      .then(() => {
        const { email, password } = userInfo;
        signIn({ email, password }).then((user) => {
          setCurrentUser(user);
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        });
      })
      .catch((error) => {
        console.log(`Ошибка ${error}`);
        setRegisterErrorStatus(error);
        setRegisterErrorVisible(true);
        setTimeout(() => {
          setRegisterErrorVisible(false);
        }, 3000);
      });
  }

  function handleLogin(userInfo) {
    signIn(userInfo)
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true');
        navigate('/movies', { replace: true });
      })
      .catch((error) => {
        console.log(`Ошибка ${error}`);
        setLoginErrorStatus(error);
        setLoginErrorVisible(true);
        setTimeout(() => {
          setLoginErrorVisible(false);
        }, 3000);
      });
  }

  function handleUpdateuser(userInfo) {
    updateUser(userInfo)
      .then((user) => {
        setCurrentUser(user);
        setUpdateSucceed(true);
        setTimeout(() => {
          setUpdateSucceed(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(`Ошибка ${error}`);
        setProfileErrorStatus(error);
        setProfileErrorVisible(true);
        setTimeout(() => {
          setProfileErrorVisible(false);
        }, 3000);
      });
  }

  function handleLogout() {
    signOut()
      .then(() => {
        localStorage.removeItem('isNotFound');
        localStorage.removeItem('searchInputValue');
        localStorage.removeItem('isShortFilmFilterOn');
        localStorage.removeItem('moviesList');
        localStorage.removeItem('lastRoute');
        localStorage.removeItem('loggedIn');
        setLoggedIn(false);
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.log(`Ошибка ${error}`);
      });
  }

  function handleMovieCardSave(movieInfo) {
    saveMovie(movieInfo)
      .then((movie) => {
        setSavedMoviesList([...savedMoviesList, movie]);
      })
      .catch((error) => {
        console.log(`Ошибка ${error}`);
      });
  }

  function handleMovieCardRemove(movieId) {
    let requestId;
    if (pathname === '/movies') {
      const { _id } = savedMoviesList.find((movie) => movieId === movie.movieId);
      requestId = _id;
    } else {
      requestId = movieId;
    }
    deleteMovie(requestId)
      .then((movie) => {
        const filteredMovies = savedMoviesList.filter((item) => item._id !== movie._id);
        setSavedMoviesList(filteredMovies);
      })
      .catch((error) => {
        console.log(`Ошибка ${error}`);
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
                  <ProtectedRoute element={Header} onPopupOpen={openNavigationPopup} />
                  <ProtectedRoute
                    element={Movies}
                    onShortFilmFilterChange={setShortFilmFilterOn}
                    isShortFilmFilterOn={isShortFilmFilterOn}
                    onSearchFormSubmit={handleMoviesSearch}
                    moviesList={moviesList}
                    savedMoviesList={savedMoviesList}
                    isLoading={isLoading}
                    isNotFound={isNotFound}
                    isErrorVisible={isSearchErrorVisible}
                    onMovieCardSave={handleMovieCardSave}
                    onMovieCardRemove={handleMovieCardRemove}
                  />
                  <ProtectedRoute element={Footer} />
                </>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <>
                  <ProtectedRoute element={Header} onPopupOpen={openNavigationPopup} />
                  <ProtectedRoute
                    element={SavedMovies}
                    savedMoviesList={savedMoviesList}
                    filteredSavedMoviesList={filteredSavedMoviesList}
                    isNotFound={isNotFound}
                    onMovieCardRemove={handleMovieCardRemove}
                    onShortFilmFilterChange={setShortFilmFilterOn}
                    isShortFilmFilterOn={isShortFilmFilterOn}
                    onSearchFormSubmit={handleSavedMoviesSearch}
                  />
                  <ProtectedRoute element={Footer} />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <ProtectedRoute element={Header} onPopupOpen={openNavigationPopup} />
                  <ProtectedRoute
                    element={Profile}
                    onLogout={handleLogout}
                    onUpdate={handleUpdateuser}
                    isErrorVisible={isProfileErrorVisible}
                    errorStatus={profileErrorStatus}
                    isUpdateSucceed={isUpdateSucceed}
                  />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthorizedRoute
                  element={Register}
                  onRegister={handleRegister}
                  isErrorVisible={isRegisterErrorVisible}
                  errorStatus={registerErrorStatus}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <AuthorizedRoute
                  element={Login}
                  onLogin={handleLogin}
                  isErrorVisible={isLoginErrorVisible}
                  errorStatus={loginErrorStatus}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <NavigationPopup isOpened={isNavigationPopupOpen} onClose={closeNavigationPopup} />
        </div>
      </AuthContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
