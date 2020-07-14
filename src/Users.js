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
  userID = 1;
  addUser = (e, value) => {
    e.preventDefault();
    const newUser = {
      id: this.userID++,
      name: value,
    }
    this.setState(prevState => {
      return (
        { userList: [...prevState.userList, { ...newUser }] }
      )
    })
  }

  removeUser = (id) => {
    console.log(id);
    const userList = this.state.userList.filter((item) => {
      return item.id !== id
    })
    this.setState({ userList })

  }
  render() {
    // console.log(this.state.userList);

    return (
      <div className="users">
        <h1>User's List</h1>
        <AddUser add={this.addUser} />
        <UserList userList={this.state.userList} remove={this.removeUser} />
      </div>
    );
  }
}

export default Users;