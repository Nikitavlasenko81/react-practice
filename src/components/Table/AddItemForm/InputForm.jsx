import React from 'react';
import { useField } from 'formik';

const InputForm = (props) => {
  const [fieldProps] = useField(props);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <input {...fieldProps} placeholder={props.placeholder} type={props.type} />;
};

export default InputForm;
