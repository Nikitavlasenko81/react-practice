import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Table from './Table';
import Modal from '../Modal/Modal';
import AddItemForm from './AddItemForm/AddItemForm';

const TableContainer = ({ userList, setUserList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchName, setSearchName] = useState('');

  const createNewTask = (values) => {
    if (values.addName === '' || values.addDescription === '') {
      alert('Вы не ввели одно или несколько значений!');
    } else {
      setUserList([
        {
          id: uuidv4(),
          name: values.addName,
          time: new Date(),
          description: values.addDescription,
          done: values.isDone,
        },
        ...userList,
      ]);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Table
        setIsModalOpen={setIsModalOpen}
        searchName={searchName}
        setSearchName={setSearchName}
        userList={userList}
      />
      <Modal
        isModalOpen={isModalOpen}
        onModalClose={() => {
          setIsModalOpen(false);
        }}
      >
        <AddItemForm createNewTask={createNewTask} />
      </Modal>
    </>
  );
};

export default TableContainer;
