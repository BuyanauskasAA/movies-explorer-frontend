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

function App() {
  const [isNavigationPopupOpen, setNavigationPopupOpen] = React.useState(false);
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

  function openNavigationPopup() {
    setNavigationPopupOpen(true);
  }

  function closeNavigationPopup() {
    setNavigationPopupOpen(false);
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
                  <Movies />
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
