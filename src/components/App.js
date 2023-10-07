import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Movies from './Movies/Movies';
import Footer from './Footer/Footer';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <CurrentUserContext.Provider value={loggedIn}>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
