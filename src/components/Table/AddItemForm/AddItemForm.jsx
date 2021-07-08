import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';

import style from './AddItemForm.module.css';
import InputForm from './InputForm';

const AddItemForm = ({ createNewTask }) => {
  const [openFormTime, setOpenFormTime] = useState('');

  const timeOfFillingForm = (openTime1, closeTime) => closeTime - openFormTime;
  const handleSubmit = (values) => {
    createNewTask(values, timeOfFillingForm(openFormTime, new Date()));
  };

  useEffect(() => {
    setOpenFormTime(new Date());
  }, []);

  return (
    <>
      <Formik initialValues={{ name: '', description: '', done: false }} onSubmit={handleSubmit}>
        <Form className={style.addTaskForm}>
          <InputForm name="name" placeholder="Enter Name" />
          <InputForm name="description" placeholder="Enter description" />
          <InputForm name="done" type="checkbox" />
          <button type="submit" className={style.addBtn}>
            Add
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default AddItemForm;
