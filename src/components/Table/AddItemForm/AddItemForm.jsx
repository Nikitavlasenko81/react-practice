import React, { useState, useEffect } from 'react';

import style from './AddItemForm.module.css';

const AddItemForm = ({ createNewTask }) => {
  const [values, setValues] = useState({ addName: '', addDescription: '', isDone: false });
  const addNameRef = React.createRef();
  useEffect(() => {
    addNameRef.current.focus();
  }, []);

  const hendleSubmit = () => {
    createNewTask(values);
  };
  return (
    <form action="" className={style.addTaskForm}>
      <input
        value={values.addName}
        onChange={(event) => setValues({ ...values, addName: event.target.value })}
        name="addName"
        placeholder="Add Name"
        type="text"
        ref={addNameRef}
      />
      <input
        value={values.addDescription}
        onChange={(event) => setValues({ ...values, addDescription: event.target.value })}
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
        value={values.isDone}
        placeholder="Введите своё имя"
        onChange={(event) => setValues({ ...values, isDone: !!event.target.value })}
      />
      <button type="button" onClick={hendleSubmit} className={style.addBtn}>
        Add new field ✓
      </button>
    </form>
  );
};

export default AddItemForm;
