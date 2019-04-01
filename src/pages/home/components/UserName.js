import React, { Component } from 'react';

class UserName extends Component {
    render() {
        return (
            <div className="container">
               <div className="row">
                  <div className="col-xs-1 col-xs-offset-11">
                    <p1>User Name: </p1> 
                    <input type="text" ref="myInput" />
                  </div> 
               </div>
            </div>
        )
    }
}

export default UserName;