import React, { Component } from 'react';
import EditRemedy from './EditRemedy'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class CreateRemedies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      isNew: false
    }
  }

  componentDidMount() {
    this.props.mountRemedyCreateForm(this.props.id);
  }
  render(){ 
  
    return (
      <div className="create-form" >
        <h2>Create a new remedy</h2>
        <form onSubmit={props.newRemedy}>
          <p>Photo Link:</p>
          <input
            type="text"
            name="name"

            value={props.remedyForm.photo}
            onChange={props.handleFormChange} />
           
            <p>Remedy's name:</p>
            
          <input
            type="text"
            name="description"
            value={props.remedyForm.name}
            onChange={props.handleFormChange} 
            />
           <h1>{remedy.title}</h1>
                <h1>{remedy.description}</h1>
                <button onClick={() => {
                  this.setState({
                    isNew: true
                  })
                  this.props.history.push(`new/remedies/${remedy.id}/${mood.id}/${user.id}`)
                }}>Create</button>
          
        </form>
      </div >
      
    )
 } 
  

  componentDidMount() {
    this.props.mountRemedyEditForm(this.props.id);
  }

  render() {
    const { remedy } = this.props;
    return (
      <div className="remedy-page">
        {remedy === undefined ? <h2>Loading . . .</h2> : (
          <div>
         <div>{remedy.title} {remedy.description}  </div>
            {this.state.isEdit ?
              <Route path={'/remedies/:id/edit'} render={() => (
                <EditRemedy
                  handleFormChange={this.props.handleFormChange}
                  handleSubmit={(e) => {
                    e.preventDefault();
                    this.props.editRemedy();
                    this.setState({ isEdit: false })
                    this.props.history.push(`/remedies/${this.props.remedyForm.id/this.props.user.id/this.props.mood.id}`)
                  }}
                  remedyForm={this.props.remedyForm} />
              )} />
              :
              <>
                <h1>{remedy.title}</h1>
                <h1>{remedy.description}</h1>
                <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/remedies/${remedy.id}/edit`)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.deleteRemedy(remedy.id);
                  this.props.history.push('/')
                }}>Delete</button>
              </>
            }
          </div>)}
      </div>)
  }
}

export default withRouter(CreateRemedies);