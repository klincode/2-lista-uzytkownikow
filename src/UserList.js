import React from 'react';
import UserItem from './UserItem'
import './UserList.css'
const UserList = ({ userList }) => {
  console.log(userList);

  const users = userList.reverse().map((item, index) => {
    return (
      <UserItem key={index} userName={item} />
    )
  })
  return (
    <ul>
      {users}
    </ul>
  );
}

export default UserList;