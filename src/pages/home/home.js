import React from 'react'
import './home.css'

class Home extends React.Component{
  render(h) {
    return (
      <div>
        <div>welcome</div>
        {/* pass params through url */}
        <a href='#/profile/2'>go profile</a>
        <div onClick={this.handler.bind(this)}>use router with function</div>
      </div>
    )
  }

  handler(){
    //pass params
    this.props.history.push({pathname:'/profile', query:{aa:1}})
  }
  
}

export default Home