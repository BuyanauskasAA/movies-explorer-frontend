import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__checkbox-container">
        <input
          name="short-movie"
          className="filter-checkbox__invisible-checkbox"
          type="checkbox"
        />
        <span className="filter-checkbox__visible-checkbox">
          <span className="filter-checkbox__slider"></span>
        </span>
        <span className="filter-checkbox__text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
