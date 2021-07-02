import React, { useState } from 'react';

import style from './Row.module.css';

const Row = (props) => {
  // eslint-disable-next-line global-require
  const dateFormat = require('dateformat');
  const data = dateFormat(new Date(props.user.time));
  const [isDone, SetIsDone] = useState(props.user.done);
  return (
    <tr className={isDone ? style.active : ''}>
      <td>{props.user.id}</td>
      <td>{props.user.name}</td>
      <td>{data}</td>
      <td>{props.user.description}</td>
      <td>
        <input
          type="checkbox"
          name="option1"
          value="a1"
          checked={isDone}
          onChange={() => SetIsDone(!isDone)}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="checkbox" />
      </td>
    </tr>
  );
};

export default Row;
