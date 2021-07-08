import React from 'react';

import style from './Table.module.css';
import Header from './Header/Header';
import Row from './Row/Row';
import Search from './Search/Search';

const Table = ({ setIsModalOpen, searchName, setSearchName, data }) => (
  <div>
    <Search searchName={searchName} setSearchName={setSearchName} />
    <button type="button" onClick={() => setIsModalOpen(true)} className={style.addBtn}>
      Add new field
    </button>
    <div>
      <table className={style.table}>
        <Header />
        <tbody>
          {data
            .filter(({ name }) => name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1)
            .map((user) => (
              <Row key={user.id} user={user} />
            ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Table;
