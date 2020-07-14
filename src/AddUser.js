import React, { Component } from 'react';
import './AddUser.css'
class AddUser extends Component {
  constructor(props) {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = (e) => {
    const name = e.target.value;
    this.setState(prevState => {
      return (
        {
          name
        }
      )
    })
  }

  clearInput = () => {
    this.setState({ name: '' })
  }

  render() {
    const isInputEmpty = this.state.name.length > 0 ? false : true;
    return (
      <form className="add-user" onSubmit={(e) => { this.props.add(e, this.state.name); this.clearInput() }}>
        <input type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} />
        <button type="submit" disabled={isInputEmpty}>Add user</button>
      </form>
    );
  }
}

export default AddUser;