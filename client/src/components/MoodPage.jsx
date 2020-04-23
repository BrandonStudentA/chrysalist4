import React from "react"
import Register from "./Register"
import Login from "./login"
import LogoutButton from "./logoutButton"
import { registerUser, verifyUser, viewAllMoods} from './services/api-helper'
import Moods from './Moods'

import {
    removeToken
  } from './services/api-helper';
export default class MoodPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentUser: " ",
            isLoggedIn:!true,
            mood: [null],
            remedy: {
              title: "",
              description: "",
              user_id: "",
              mood_id: ""
            }
        
        }
           
        
    };
    


           
            async componentDidMount() {
            this.getMoods();
            const currentUser = await verifyUser();
            if (verifyUser === true)
                this.setState({ currentUser})
            }
            

          
            render(){
            
                return (    
                   
                    
                
                     <div>
                    <LoginButton onClick={props.handleLoginButton} />  

                            <div><Register/></div> 

                        <h1>Welome To Chrysalis </h1>
                       

                        <div> <Moods/> </div>
                            
                            
                       <LogoutButton onClick={props.handleLoginButton} />
                    
                     
                            
                                 
                         </div>
                    
                    
                )
            }        
 }         