import React from 'react';
import { registerUser} from './services/api-helper'
import { withRouter } from 'react-router-dom';

// This component handles our register form
export default class Register extends React.Component{
   constructor(props){
     super(props)

     this.state = {
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    };
  }
      
     
  

    handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
    }


    handleChange = async (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })

    }
  
    render() {
      return (
          <div className="auth-container">
            <h2>Register</h2>
            <hr />
            <form onSubmit={this.handleRegister} >
              <p>Username:</p>
              <input name="username" type="text" value={this.state.authFormData.username} onChange={this.handleChange} required/>
              <p>Email:</p>
              <input name="email" type="email" value={this.state.authFormData.email} onChange={this.handleChange} required/>
              <p>Password:</p>
              <input name="password" type="password" value={this.state.authFormData.password} onChange={this.handleChange} required />
              <hr/>
              <button>Register</button>
            </form>
          </div>
        );
    

    }


}