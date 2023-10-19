import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Error from '../Error/Error';

function SearchForm({ isShortFilmFilterOn, onFilter, onSearchFormSubmit }) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === '/movies' && localStorage.getItem('searchInputValue') !== null) {
      inputValue.current.value = localStorage.getItem('searchInputValue');
    }
  }, []);

  const inputValue = React.useRef();
  const [isInputValid, setInputValid] = React.useState(true);

  function handleInputCheck() {
    setInputValid(inputValue.current.checkValidity());
  }

  function onSubmit(event) {
    event.preventDefault();
    if (isInputValid) {
      if (pathname === '/movies') {
        localStorage.setItem('isShortFilmFilterOn', isShortFilmFilterOn);
        localStorage.setItem('searchInputValue', inputValue.current.value);
      }
      onSearchFormSubmit(inputValue.current.value, isShortFilmFilterOn);
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
