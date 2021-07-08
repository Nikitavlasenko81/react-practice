import React, { useState } from 'react';

import style from './Row.module.css';
import dateFormat from 'dateformat';

const Row = ({ user }) => {
  const [isDone, setIsDone] = useState(user.done);

  return (
    <tr className={isDone ? style.active : ''}>
      <td>{user.name}</td>
      <td>{dateFormat(user.time, 'MM:ss:L')}</td>
      <td>{user.description}</td>
      <td>
        <input
          type="checkbox"
          name="option1"
          value="a1"
          checked={isDone}
          onChange={() => setIsDone(!isDone)}
        />
      </td>
    </tr>
  );
};

export default Row;
