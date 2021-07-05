import React, { useState } from 'react';

import Table from './components/Table/Table';
import { usersList } from './data/users';

export function App() {
  const [userList, setUserList] = useState(usersList);
  const [searchName, setSearchName] = useState('');
  return (
    <Table
      userList={userList}
      setUserList={setUserList}
      searchName={searchName}
      setSearchName={setSearchName}
    />
  );
}
