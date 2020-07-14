import React, { Component } from 'react';
import './AddUser.css'
const AddUser = () => {
  return (
    <form className="add-user">
      <input type="text" name="name" placeholder="Enter name" />
      <button type="submit">Add user</button>
    </form>
  );
}

export default AddUser;