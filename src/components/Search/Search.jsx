import React from 'react';

import style from '../Table/Table.module.css';

const Search = ({ searchName, setSearchName }) => (
  <div className={style.search}>
    <form action="">
      <input
        value={searchName}
        onChange={(event) => setSearchName(event.target.value)}
        name="searchName"
        placeholder="Искать здесь..."
        type="search"
      />
    </form>
  </div>
);
export default Search;
