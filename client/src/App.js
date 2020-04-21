import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import UserView from './components/UserView';
import UserPage from './components/UserPage';
import CreateUser from './components/CreateUser'
import Login from './components/Login'
import Register from './components/Register'

import {
  createUser,
  readAllUsers,
  updateUser,
  destroyUser,
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './services/api-helper'

import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      remedyFormData: {
        title: "",
        description: "",
        mood_id: "",
        user_id: ""
      },
    
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    };
  }

  async componentDidMount() {
    this.getUsers();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }
  getUsers = async () => {
    const users = await readAllUsers();
    this.setState({
      users
    })
  }

  

  editUser = async () => {
    const { userForm } = this.state
    const updatedUser = await updateUser(userForm.id, userForm);
    this.setState(prevState => (
      {
        users: prevState.users.map(user => {
          return user.id === userForm.id ? updatedUser : user
        }),
      }
    ))
  }

  deleteUser= async (id) => {
    await destroyUser(id);
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== id)
    }))
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userForm: {
        ...prevState.userForm,
        [name]: value
      }
    }))
  }

  mountEditForm = async (id) => {
    const users = await readAllUsers();
    const user = users.find(el => el.id === parseInt(id));
    this.setState({
      userForm: user
    });
  }

  resetForm = () => {
    this.setState({
      userForm: {
        name: "",
        photo: ""
      }
    })
  }

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
  }
  
  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  }
  
  handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div className="App" >
        <Header
          handleLoginButton={this.handleLoginButton}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route
          exact path="/"
          render={() => (
            <UserView
              currentUser={this.state.currentUser}
              users={this.state.users}
              userForm={this.state.userForm}
              handleFormChange={this.handleFormChange}
              newUser={this.newUser} />
          )}
        />
        
        <Route
          path="/users/:id"
          render={(props) => {
            const { id } = props.match.params;
            const user = this.state.users.find(el => el.id === parseInt(id));
            return <UserPage
              id={id}
              user={user}
              handleFormChange={this.handleFormChange}
              mountEditForm={this.mountEditForm}
              editUser={this.editUser}
              userForm={this.state.userForm}
              deleteUser={this.deleteUser} />
          }}
        />
      </div>
    );
  }
}

export default withRouter(App);