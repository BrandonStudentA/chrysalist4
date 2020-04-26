import React from 'react'
import {
  viewAllMoods,
  
} from '../services/api-helper';
export  class Moods extends React.Component{
    constructor(props){
      super(props)
    this.state = {
         moods: null
      
    }
  }


    async componentDidMount() {
    const moods = await viewAllMoods();
    console.log("hello")
     this.setState({ moods }) 
    }

     render() {
       const moods = this.state.moods && this.state.moods.map((mood, index) =>{
            return (
          
                      <div key={index}>
                 
          
                      <div >
                      <td><img src={mood.image_url} alt=""/> </td>
                     <h3>{mood.name}</h3>
                    
                      </div> 
                     </div>
                      )
                       });

                      return(
                        <div>
                          {moods}
                       </div>

                
                  )
              }

}
