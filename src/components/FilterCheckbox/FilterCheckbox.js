import React from 'react';
import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';

function FilterCheckbox({ onFilterChange, isFilterOn }) {
  const filter = React.useRef();
  const { pathname } = useLocation();

  function handleFilterChange() {
    onFilterChange(filter.current.checked);
    if (pathname === '/movies') {
      localStorage.setItem('isShortFilmFilterOn', filter.current.checked);
    }
  }

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__checkbox-container">
        <input
          ref={filter}
          name="short-movie"
          className="filter-checkbox__invisible-checkbox"
          type="checkbox"
          onChange={handleFilterChange}
          checked={isFilterOn}
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
