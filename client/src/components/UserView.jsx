import React from 'react';
import { withRouter } from 'react-router';
import './App.css';


class  UserView extends React.Component {

  constructor(props) {
    super(props);

    console.log(this.props)
}
  

render(){
  return (
    <div className="user-container">
      {this.props.users.map(this.props.user  (
        <div
          key={this.props.id}
          className="user-card"
          onClick={(e) => {
            if (this.props.currentUser) {
              this.props.history.push(`/users/${this.props.props.id}`);
            } else {
              this.props.history.push(`/login`);
            }
            window.scrollTo(0, 0);
          }}>
          
          <h3>
            <p>{this.props.username}</p>
          </h3>
        </div>
      ))}
      <div
        className="user-card"
        onClick={() => {
          this.props.history.push('/new/user');
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



}
export default withRouter(UserView);




