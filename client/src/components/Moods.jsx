import React from "react"
import Remedies from "./remedies"
import { Route, Link,BrowserRouter } from 'react-router-dom';
import {viewAllMoods} from './services/api-helper'

export default class Moods extends React.Component{
    constructor(props){
      super(props)
    this.State = {
         moods: {
           mood_id: null,
           name: "",
           image_url: "",
         } 
      }
    }
   


    async componentDidMount() {
    const moods = await viewAllMoods;
    return this.setState({ moods }) 
    }

     render() {
         this.state.moods = this.state.moods.map((mood) =>{
            return (
              <div>
                  <h3>All Posts</h3>
          
                   <tbody>key={this.state.moods.mood.id}
                    <td><img src={`/moods/${this.state.moods.image_url}`}/> </td>
                    <h3>{this.state.moods.name}</h3>
                    </tbody> 
                    </div>
                      )
                    });

                    return(
                      <div>
                          {this.state.moods}
                      </div>
                  )
              }
 
}
