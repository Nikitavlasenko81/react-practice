import React, { useState } from 'react';
import { usersList } from './data/users';
import TableContainer from './components/Table/TableContainer';

export function App() {
  const [userList, setUserList] = useState(usersList);
  return <TableContainer userList={userList} setUserList={setUserList} />;
}
