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
        <div className="filter-checkbox__visible-checkbox">
          <div className="filter-checkbox__slider"></div>
        </div>
        <p className="filter-checkbox__text">Короткометражки</p>
      </label>
    </div>
  );
}

export default FilterCheckbox;
