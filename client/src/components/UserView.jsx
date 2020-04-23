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
          alt="Create a new Remedy"
          />
        <h3>Create a new Remedy</h3>
      </div>
    </div>
  )
}

export default withRouter(UsersView)