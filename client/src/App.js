import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  removeToken
} from './services/api-helper'
import MoodPage from './components/MooodPage';



import './App.css';
import Header from './components/Header';
import MoodPage from './components/MoodPage';
 class App extends React.Component{
    constructor(){

  super()

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
  }
    
    <BrowserRouter>
    <Switch>

  <Route exact path={"/"}  render={() => (
      <MoodPage/>
    )}/>
    <Header
      handleLoginButton={this.handleLoginButton}
      handleLogout={this.handleLogout}
      currentUser={this.state.currentUser}
    />
  
    </Switch>
  </BrowserRouter>

withRouter App;