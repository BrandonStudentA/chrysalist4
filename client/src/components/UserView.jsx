import React from 'react';
import { withRouter } from 'react-router';

function UsersView(props) {
  return (
    <div className="user-container">
      {props.users.map(user => (
        <div
          key={user.id}
          className="user-card"
          onClick={(e) => {
            if (props.currentUser) {
              props.history.push(`/users/${user.id}`);
            } else {
              props.history.push(`/login`);
            }
            window.scrollTo(0, 0);
          }}>
          <img alt={user.name} src={user.photo} />
          <h3>
            <p>{user.name}</p>
          </h3>
        </div>
      ))}
      <div
        className="user-card"
        onClick={() => {
          props.history.push('/new/user');
          window.scrollTo(0, 0);
        }}>
        <img
          alt="Create a new user"
          src="https://image.flaticon.com/icons/png/512/14/14980.png"
          className="plus-sign" />
        <h3>Create a new user</h3>
      </div>
    </div>
  )
}

export default withRouter(UsersView)