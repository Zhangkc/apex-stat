import React, { Component } from 'react'
import './card.css'

export default class card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-title">
          <h2>{this.props.hero.name}</h2>
        </div>
        <div className="card-content">
          <div className="card-img">
            <img src={`https://trackercdn.com/cdn/apex.tracker.gg/legends/${this.props.hero.name}-tall.png`} alt="" />
          </div>
          <div className="card-stat">
            {this.props.hero.stats.map((item,index)=>{
              console.log(item)
              return (
                <div key={index}>
                  <div className="card-stat-name">{Object.keys(item)[0]}</div>
                  <div className="card-stat-value">{item[Object.keys(item)[0]]}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
