import React from "react"
import Register from "./Register"
import Login from "./login"
import LogoutButton from "./logoutButton"
import { registerUser, verifyUser, viewAllMoods} from './services/api-helper'
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
            this.handleLoginClick = this.handleLoginClick.bind(this);
            this.handleLogoutClick = this.handleLogoutClick.bind(this);
        //   this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        //   this.handleLogoutClick = this.handleLogoutClick.bind(this);
};
      


        //   handleLoginClick() {
        //     this.setState({isLoggedIn: true});
        //   }

            async componentDidMount() {
            this.getMoods();
            const currentUser = await verifyUser();
            if (verifyUser === true)
                this.setState({ currentUser})
            }
            

            handleLogoutClick = () => {
            localStorage.removeItem("authToken");
            removeToken();
            this.setState({
              currentUser: null
            })
        }
            render(){

               
            
                return (    
                   
                    
                
                     <div>
                    <LoginButton onClick={this.handleLoginClick} />  


                    
                    

                        <h1>Welome To Chrysalis </h1>
                       

                        <div> <Moods/> </div>
                            
                            
                       <LogoutButton onClick={this.handleLogoutClick} />
                    
                     
                            <Register/>
                            <Login/>
                                 
                         </div>
                    
                    
                )
            }        
 }         
