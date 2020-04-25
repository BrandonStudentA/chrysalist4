import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router';
import UserView from './components/UserView'
// import EditUse from './component/EditUser'
import MoodPage from './components/MoodPage'
import Moods from './components/Moods'
// import UserPage from './components/UserPage'
// import CreateRemedy from './components/CreateRemedies'
import Login from './components/Login'
import Register from './components/Register'
import {
  
  createRemedy,
  verifyUser,
  readAllRemedies,
  updateUser,
  destroyUser,
  readAllUsers,
} from './services/api-helper';

import Header from './components/Header';

import './App.css';
// import Header from './components/Header';

class App extends React.Component{


 constructor(props) {
  super(props);
  this.state = {
    currentUser: null,
    authFormData: {
      username: "",
      email: "",
      password: ""
    }
  };
}


async componentDidMount() {
  const currentUser = await verifyUser(){
  if (currentUser) {
    this.setState({ currentUser })
  }
}
}

getUsers = async () => {
  const users = await readAllUsers();
  this.setState({
    users
  })
}

newRemedy = async (e) => {
  e.preventDefault();
  const remedy = await createRemedy(this.state.remedyForm);
  this.setState(prevState => ({
    remedies: [...prevState.remedies, remedy],
    remedyForm: {
      title: "",
      descriptiom: ""
    }
  }))
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

deleteUser = async (id) => {
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

mountRemedyCreateForm = async (id) => {
  const remedies = await readAllRemedies();
  const remedy = remedies.find(el => el.id === parseInt(id));
  this.setState({
    remedyForm: remedy
  });
}


mountRemedyEditForm = async (id) => {
  const remedies = await readAllRemedies();
  const remedy = remedies.find(el => el.id === parseInt(id));
  this.setState({
    remedyForm: remedy
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

 
render(){

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
          <Register />)} />
        <Route
          exact path="/"
          render={() => (
            <UserView
              currentUser={this.state.currentUser}
              users={this.state.users}
              userForm={this.state.userForm}
              handleFormChange={this.handleFormChange}
              newUser={this.newUser} />
          )}/>
          <Route
          exact path="/"
          render={() => (
            <MoodPage />
          )}/>
          <Route
          exact path="/"
          render={() => (
            <Moods />
          )}/>
          CreateRemedy
        <Route
          path="/remedies/:id"
          render={(props) => {
            const { id } = props.match.params;
            const remedy = this.state.remedies.find(el => el.id === parseInt(id));
            return <Moods
            id={id}
            remedy={remedy}
            handleFormChange={this.handleFormChange}
            mountRemedyEditForm={this.mountRemedyEditForm}
            editRemedy={this.editRemedy}
            RemedyForm={this.state.RemedyForm}
            deleteRemedy={this.deleteRemedy} />
          }}
        />
        <Route
          path="/remedies/:id"
          render={(props) => {
            const { id } = props.match.params;
            const remedy = this.state.remedies.find(el => el.id === parseInt(id));
            return <Moods
              id={id}
               remedy={remedy}
              handleFormChange={this.handleFormChange}
              mountRemedyEditForm={this.mountRemedyEditForm}
              editRemedy={this.editRemedy}
              RemedyForm={this.state.RemedyForm}
              deleteRemedy={this.deleteRemedy} />
          }}
        />
      </div>
    );
  }
}

export default withRouter(App);

