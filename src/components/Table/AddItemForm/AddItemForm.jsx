import React, { useState, useEffect } from 'react';

import style from './AddItemForm.module.css';

const AddItemForm = ({ createNewTask }) => {
  const [values, setValues] = useState({ name: '', description: '', done: false });
  const [openFormTime, setOpenFormTime] = useState('');
  const isDesabled = values.addName === '' || values.addDescription === '';

  const addNameRef = React.createRef();

  const timeOfFillingForm = (openTime1, closeTime) => closeTime - openFormTime;

  useEffect(() => {
    addNameRef.current.focus();
    setOpenFormTime(new Date());
  }, []);

  const handleSubmit = () => {
    createNewTask(values, timeOfFillingForm(openFormTime, new Date()));
  };
  return (
    <form action="" className={style.addTaskForm}>
      <input
        value={values.name}
        onChange={(event) => setValues({ ...values, name: event.target.value })}
        name="addName"
        placeholder="Add Name"
        type="text"
        ref={addNameRef}
      />
      <input
        value={values.description}
        onChange={(event) => setValues({ ...values, description: event.target.value })}
        name="addDescription"
        placeholder="Add Description"
        type="text"
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>Done</label>
      <input
        className={style.isDone}
        type="checkbox"
        name="isDone"
        value={values.done}
        placeholder="Введите своё имя"
        onChange={(event) => setValues({ ...values, done: !!event.target.value })}
      />
      <button type="button" disabled={isDesabled} onClick={handleSubmit} className={style.addBtn}>
        Add
      </button>
    </form>
  );
};

export default AddItemForm;
