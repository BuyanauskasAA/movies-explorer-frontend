import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Footer from './Footer/Footer';
import Register from './Register/Register';
import PageNotFound from './PageNotFound/PageNotFound';
import CurrentUserContext from '../contexts/CurrentUserContext';
import AuthContext from '../contexts/AuthContext';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AuthContext.Provider value={loggedIn}>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route
              path="/movies"
              element={
                <>
                  <Header />
                  <Movies />
                  <Footer />
                </>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <>
                  <Header />
                  <SavedMovies />
                  <Footer />
                </>
              }
            />
            <Route path="/signup" element={<Register />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </AuthContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
