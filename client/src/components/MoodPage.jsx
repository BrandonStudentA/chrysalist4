import React from "react"
import Register from "./Register"

import LoginButton from './LoginButton'
import LogoutButton from "./LogoutButton"
import { verifyUser } from '../services/api-helper'
import Moods from './Moods'


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
           
            const currentUser = await verifyUser();
            if (verifyUser === true)
                this.setState({ currentUser})
            }
            

          
            render(){
            
                return (    
                   
                    
                
                     <div>
                    <LoginButton onClick={this.props.handleLoginButton} />  

                            <div><Register/></div> 

                        <h1>Welome To Chrysalis </h1>
                       

                        <div> <Moods/> </div>
                            
                            
                       <LogoutButton onClick={this.props.handleLoginButton} />
                    
                     
                            
                                 
                         </div>
                    
                    
                )
            }        
 }         
