import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateUser(props) {
  return (
    <div className="create-form" >
      <h2>Create a new user</h2>
      <form onSubmit={props.newUser}>
        <p>email Link:</p>
        <input
          type="text"
          name="email"
          value={props.adminForm.email}
          onChange={props.handleFormChange} />
          <p>User's name:</p>
        <input
          type="text"
          name="username"
          value={props.userForm.name}
          onChange={props.handleFormChange} />
        <p>User's password:</p>
        <input
          type="text"
          name="password"
          value={props.userForm.password}
          onChange={props.handleFormChange} />
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreateUser);