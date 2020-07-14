import React from 'react';
import UserItem from './UserItem'
import './UserList.css'
const UserList = (props) => {
  const users = props.userList.reverse().map((item, index) => {
    return (
      <UserItem key={index} user={item} userId={index} remove={props.remove} />
    )
  })
  return (
    <ul>
      {users.length > 0 ? users : "Brak elementów do wyświetlenia..."}
    </ul>
  );
}

export default UserList;