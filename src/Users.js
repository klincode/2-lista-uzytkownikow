//ccc sfc
import React, { Component } from 'react';
import AddUser from "./AddUser"
import UserList from "./UserList"
import './Users.css'
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    }
  }

  addUser = (e, value) => {
    e.preventDefault();

    this.setState(prevState => {
      return (
        { userList: [...prevState.userList, value] }
      )
    })

  }
  render() {
    // console.log(this.state.userList);

    return (
      <div className="users">
        <h1>User's List</h1>
        <AddUser add={this.addUser} />
        <UserList userList={this.state.userList} />
      </div>
    );
  }
}

export default Users;