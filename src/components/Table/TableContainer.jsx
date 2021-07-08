import React, { useState } from 'react';

import { useTableApi } from '../../hooks/useTableApi';
import Table from './Table';
import Modal from '../Modal/Modal';
import AddItemForm from './AddItemForm/AddItemForm';

const TableContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [data, api] = useTableApi('http://localhost:3004/users');
  const { createData } = api;

  const createNewTask = (values, timeOfFillingForm) => {
    createData({
      ...values,
      time: timeOfFillingForm,
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <Table
        setIsModalOpen={setIsModalOpen}
        searchName={searchName}
        setSearchName={setSearchName}
        data={data}
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
