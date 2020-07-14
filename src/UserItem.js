import React from 'react';
import './UserItem.css'
const UserItem = (props) => {
  return (
    <li className='user-item'>
      {props.userName}
      <span className="close-icon">X</span>
    </li>
  );
}

export default UserItem;