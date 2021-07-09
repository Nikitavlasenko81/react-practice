import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import * as yup from 'yup';

import style from './AddItemForm.module.css';

const useStyles = makeStyles({
  input: {
    width: '400px',
  },
});

const validationSchema = yup.object({
  name: yup
    .string('Enter your email')
    .max(20, 'Password should be of maximum 20 characters length')
    .required('Email is required')
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^[^!@#$%^&*()_]$/,
      'It is forbidden to enter special characters'
    ),
  description: yup
    .string('Enter your password')
    .max(40, 'Password should be of maximum 40 characters length')
    .required('Password is required'),
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
    validationSchema,
  });

  const addNameRef = React.createRef();

  useEffect(() => {
    addNameRef.current.focus();
    setOpenFormTime(new Date());
  }, []);

  return (
    <form action="" className={style.addTaskForm} onSubmit={formik.handleSubmit}>
      <TextField
        className={useStyles().input}
        name="name"
        id="standard-search"
        label="Enter name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        placeholder="Add Name"
        ref={addNameRef}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        className={useStyles().input}
        name="description"
        id="standard-search"
        label="Enter description"
        type="text"
        value={formik.values.description}
        onChange={formik.handleChange}
        placeholder="Add Name"
        ref={addNameRef}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <Checkbox
        name="done"
        checked={formik.values.done}
        onChange={formik.handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <button type="submit" className={style.addBtn}>
        Add
      </button>
    </form>
  );
};

export default AddItemForm;
