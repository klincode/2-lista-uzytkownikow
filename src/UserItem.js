import React from 'react';
import './UserItem.css'
const UserItem = (props) => {
  console.log(props);
  const { id, name } = props.user;
  return (
    <li className='user-item'>
      {name}
      <span className="close-icon" onClick={() => props.remove(id)}>X</span>
    </li>
  );
}

export default UserItem;