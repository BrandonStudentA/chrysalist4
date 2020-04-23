import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import { withRouter } from 'react-router';
// import {
//   removeToken
// } from './services/api-helper';
import MoodPage from './components/MoodPage';


import './App.css';
// import Header from './components/Header';

 export default class App extends React.Component{
    constructor(){

  super()

 } 
 
  // authHandleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState(prevState => ({
  //     authFormData: {
  //       ...prevState.authFormData,
  //       [name]: value
  //     }
  // },
render(){


   return(
    <>  
  <Route exact path={"/"}  render={() => (
    <MoodPage/>
  )}/>

   {/* <Header */}
  

  </>
   )
  }
 }  