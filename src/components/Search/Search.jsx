import React from 'react';
import style from './Search.module.css';

const Search = ({ searchName, setSearchName }) => (
  <div className={style.search}>
    <input
      value={searchName}
      onChange={(event) => setSearchName(event.target.value)}
      name="searchName"
      placeholder="Search here..."
      type="search"
    />
  </div>
);
export default Search;
