import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'

export default function Header(props) {
  return (
    <header>
      <h1><Link to='/' onClick={props.resetForm}>Chrysalist Mood App</Link></h1>
      <div>
        {props.currentUser
          ?
          <>
            <p>{props.currentadmin.username}</p>
            <LogoutButton onClick={props.handleLogout} placeholder="logout"/>
          </>
          :
          <LoginButton onClick={props.handleLoginButton} placeholder="Login/register"/>
        }
      </div>
    </header>
  )
}