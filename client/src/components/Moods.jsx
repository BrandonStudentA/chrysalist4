import React from "react"
import Remedies from "./remedies"
import {viewAllMoods} from './services/api-helper'

 const Moods = React.createClass({
    constructor(props){
      super(props)
    this.State = {
         moods: [] 
      }
    },
   


    async componentDidMount() {
    const moods = await viewAllMoods();
    return this.setState({ moods }) 
    },

    render() {
      moods = this.state.moods.map((mood) =>{
      return (
        <div>
          <h3>All Posts</h3>
          
            <tbody>key={mood.id}
            <td><img src={`/moods/${image_url}`}/> </td>
            <h3>{mood.name}</h3>
            {
            this.props.remedies = this.props.remedies.map((remedie,index) => {
                return (
                  <tr index={mood.id}>
                    <td>
                      <Link to={`/remedies/${mood_id}`}>
                        {remedie.title}
                      </Link>
                    </td>
                    
                  </tr>
                )
              })
            }
            </tbody>
        
        </div>
      )
    
    }
  }
}
  export defualt Moods