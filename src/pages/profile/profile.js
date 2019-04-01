import React from 'react'
import './profile.css'
//import { Button } from 'antd'

export default class Profile extends React.Component{
  handler = function(e) {
    //e is always the last arg
    console.log(e)
    this.props.history.push('/')
  }

  componentDidMount(){
    console.log(this.props.history.location.query)
    console.log(this.props.match.params)
  }
  
  render(){
    return (
      <div className="profile-container">
        
      </div>
    )
  }
}