import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Table from './Table';

const TableContainer = ({ userList, setUserList }) => {
  const [modal, setModal] = useState(false);
  const [values, setValues] = useState({ addName: '', addDescription: '' });
  const [searchName, setSearchName] = useState('');

  const createNewTask = () => {
    if (values.addName === '' || values.addDescription === '') {
      alert('Вы не ввели одно или несколько значений!');
    } else {
      setUserList([
        {
          id: uuidv4(),
          name: values.addName,
          time: new Date(),
          description: values.addDescription,
          done: false,
        },
        ...userList,
      ]);
      setModal(false);
      setValues({ addName: '', addDescription: '' });
    }
  };

  return (
    <Table
      modal={modal}
      setModal={setModal}
      values={values}
      setValues={setValues}
      searchName={searchName}
      setSearchName={setSearchName}
      createNewTask={createNewTask}
      userList={userList}
    />
  );
};

export default TableContainer;
