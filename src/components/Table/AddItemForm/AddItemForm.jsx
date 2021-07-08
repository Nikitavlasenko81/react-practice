import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';

import style from './AddItemForm.module.css';

const AddItemForm = ({ createNewTask }) => {
  const [openFormTime, setOpenFormTime] = useState('');

  const timeOfFillingForm = (openTime1, closeTime) => closeTime - openFormTime;
  const handleSubmit = (values) => {
    createNewTask(values, timeOfFillingForm(openFormTime, new Date()));
  };

  const formik = useFormik({
    initialValues: { name: '', description: '', done: false },
    onSubmit: handleSubmit,
  });

  const addNameRef = React.createRef();

  useEffect(() => {
    addNameRef.current.focus();
    setOpenFormTime(new Date());
  }, []);

  const isDesabled = formik.values.name === '' || formik.values.description === '';
  return (
    <form action="" className={style.addTaskForm} onSubmit={formik.handleSubmit}>
      <input
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
        placeholder="Add Name"
        type="text"
        ref={addNameRef}
      />
      <input
        value={formik.values.description}
        onChange={formik.handleChange}
        name="description"
        placeholder="Add Description"
        type="text"
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>Done</label>
      <input
        className={style.isDone}
        type="checkbox"
        name="done"
        value={formik.values.done}
        placeholder="Введите своё имя"
        onChange={formik.handleChange}
      />
      <button type="submit" disabled={isDesabled} className={style.addBtn}>
        Add
      </button>
    </form>
  );
};

export default AddItemForm;
