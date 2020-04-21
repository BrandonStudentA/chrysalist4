import React from 'react';
import { withRouter } from 'react-router-dom';

function EditAdmin(props) {
  return (
    <div>
      <h3>Create a new admin</h3>
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
      </form>
    </div>
  )
}


export default withRouter(EditAdmin);