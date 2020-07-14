import React from 'react';
import UserItem from './UserItem'
import './UserList.css'
const UserList = () => {
  return (
    <ul>
      <UserItem userName="test" />
      <UserItem userName="test" />
      <UserItem userName="test" />
      <UserItem userName="test" />
      <UserItem userName="test" />
    </ul>
  );
}

export default UserList;