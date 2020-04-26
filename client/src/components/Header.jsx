import React from 'react'
import { Link } from 'react-router-dom'

import { withRouter } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <h1><Link to='/' onClick={props.resetForm}>Chrysalist Mood App</Link></h1>
      <div>
       <button to="/login" >Login</button>
      </div>
    </header>
  )
}