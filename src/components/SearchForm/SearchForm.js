import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search-form">
        <fieldset className="search-form__container">
          <input
            className="search-form__input"
            name="movie"
            type="text"
            placeholder="Фильм"
            required
          />
          <button className="search-form__submit-button" type="submit"></button>
        </fieldset>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
