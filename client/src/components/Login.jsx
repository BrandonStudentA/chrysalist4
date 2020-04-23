import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser} from './services/api-helper'
import { withRouter } from 'react-router-dom';

// This component handles our login form and has a link to the register form
export default class Login extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      currentUser: !true,
     authFormData: {
       username: "",
       email: "",
       password: ""
     }
   };
 }
     
    
 
  handleChange= async (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

   handleLogin= async (e) => {
   e.preventDefault();
   const currentUser = await loginUser(this.state.authFormData);
   currentUser ? this.setState({  currentUser }) : alert("wrong username or password")
   
   }


 
   render() {
    return (
      <div className="auth-container">
        <h2>login</h2>
        <hr />
        <form onSubmit={(e) => {
          e.preventDefault();
          this.handleLogin();}} >
          <p>Username:</p>
          <input name="username" type="text" value={this.state.authFormData.username} onChange={this.handleChange} required />
          <p>Password:</p>
          <input name="password" type="password" value={this.state.authFormData.password} onChange={this.handleChange} required />
          <hr/>
          <button type="submit">Login</button>

          <Link to="/register">Register</Link>
        </form>
      </div>
    );
  }
}  
