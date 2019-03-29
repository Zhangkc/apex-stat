import React from 'react'
import './profile.css'

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
      <div>
        <h1>profile</h1>
        <a href='#/'>return home</a>
        <div onClick={this.handler.bind(this)}>use router with function</div>
      </div>
    )
  }
}