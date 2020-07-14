//ccc sfc
import React, { Component } from 'react';
import AddUser from "./AddUser"
import UserList from "./UserList"
import './Users.css'
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="users">
        <h1>User's List</h1>
        <AddUser />
        <UserList />
      </div>
    );
  }
}

export default Users;