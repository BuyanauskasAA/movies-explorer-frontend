import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Error from '../Error/Error';

function SearchForm({ isShortFilmFilterOn, onFilter, onMoviesSearch, onMoviesSearchApi }) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === '/movies' && localStorage.getItem('searchInputValue') !== null) {
      inputValue.current.value = localStorage.getItem('searchInputValue');
    }
  }, []);

  const inputValue = React.useRef();
  const [isInputValid, setInputValid] = React.useState(true);
  const [submitCount, setSubmitCount] = React.useState(0);

  function handleInputCheck() {
    setInputValid(inputValue.current.checkValidity());
    setSubmitCount(submitCount + 1);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (isInputValid) {
      if (pathname === '/movies') {
        localStorage.setItem('searchInputValue', inputValue.current.value);
        if (submitCount > 1) {
          onMoviesSearch(inputValue.current.value);
        } else {
          onMoviesSearchApi(inputValue.current.value);
        }
      } else {
        onMoviesSearch(inputValue.current.value);
      }
    }
  }

  return (
    <section className="search">
      <form onSubmit={onSubmit} className="search-form" noValidate>
        <fieldset className="search-form__container">
          <input
            ref={inputValue}
            className="search-form__input"
            name="movie"
            type="text"
            placeholder="Фильм"
            required
          />
          <button
            onClick={handleInputCheck}
            className="search-form__submit-button"
            type="submit"
          ></button>
        </fieldset>
        <Error isActive={!isInputValid} text="Нужно ввести ключевое слово" />
        <FilterCheckbox onFilterChange={onFilter} isFilterOn={isShortFilmFilterOn} />
      </form>
    </section>
  );
}

export default SearchForm;
