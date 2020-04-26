import React from "react"
import Register from "./Register"

import { verifyUser } from '../services/api-helper'
import Moods from './Moods'


export default class MoodPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentUser: " ",
            isLoggedIn:true,
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
                      <Register/>
                 
                     </div>
                    
                    
                )
            }        
 }         
