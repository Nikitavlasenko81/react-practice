import React from 'react';

import style from './Table.module.css';
import Header from './Header/Header';
import Row from './Row/Row';
import Modal from '../Modal/Modal';
import Search from '../Search/Search';

const Table = ({
  modal,
  setModal,
  values,
  setValues,
  searchName,
  setSearchName,
  createNewTask,
  userList,
}) => (
  <div>
    <Modal
      isOpend={modal}
      onModalClose={() => {
        setModal(false);
      }}
    >
      <form action="" className={style.addTaskForm}>
        <input
          value={values.addName}
          onChange={(event) => setValues({ ...values, addName: event.target.value })}
          name="addName"
          placeholder="Add Name"
          type="text"
        />
        <input
          value={values.addDescription}
          onChange={(event) => setValues({ ...values, addDescription: event.target.value })}
          name="addDescription"
          placeholder="Add Description"
          type="text"
        />
        <button type="button" onClick={createNewTask} className={style.addBtn}>
          Add new field ✓
        </button>
      </form>
    </Modal>
    <Search searchName={searchName} setSearchName={setSearchName} />
    <button type="button" onClick={() => setModal(true)} className={style.addBtn}>
      Add new field
    </button>
    <div>
      <table className={style.table}>
        <Header />
        <tbody>
          {userList
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
