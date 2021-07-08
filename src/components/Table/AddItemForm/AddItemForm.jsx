import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

import style from './AddItemForm.module.css';

const useStyles = makeStyles({
  input: {
    width: '400px',
  },
});

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
      <TextField
        className={useStyles().input}
        name="name"
        id="standard-search"
        label="Search field"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        placeholder="Add Name"
        ref={addNameRef}
      />
      <TextField
        className={useStyles().input}
        name="description"
        id="standard-search"
        label="Search field"
        type="text"
        value={formik.values.description}
        onChange={formik.handleChange}
        placeholder="Add Name"
        ref={addNameRef}
      />
      <Checkbox
        name="done"
        checked={formik.values.done}
        onChange={formik.handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <button type="submit" disabled={isDesabled} className={style.addBtn}>
        Add
      </button>
    </form>
  );
};

export default AddItemForm;
