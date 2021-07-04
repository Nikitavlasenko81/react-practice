import React, { useState } from 'react';
import dateFormat from 'dateformat';

import style from './Row.module.css';

const Row = ({ user }) => {
  const data = dateFormat(new Date(user.time));
  const [isDone, SetIsDone] = useState(user.done);
  return (
    <tr className={isDone ? style.active : ''}>
      <td>{user.name}</td>
      <td>{data}</td>
      <td>{user.description}</td>
      <td>
        <input
          type="checkbox"
          name="option1"
          value="a1"
          checked={isDone}
          onChange={() => SetIsDone(!isDone)}
        />
      </td>
    </tr>
  );
};

export default Row;
