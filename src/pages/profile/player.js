import React from 'react'
import './player.css'

const player = (props) => {
  console.log(props)
  return (
    <div className="player-container">
      <div className="player-info">
        <div><img src="" alt=""></img></div>
        <h1 className="player-name">{props.name}</h1>
      </div>
      <div className="player-career">
        <div>
          <div className="card-stat-name">level</div>
          <div className="card-stat-value">{props.level}</div>
        </div>
      </div>
    </div>
  )
}

export default player
