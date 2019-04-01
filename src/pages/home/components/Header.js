import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container">
               <div className="row">
                  <div className="col-xs-1 col-xs-offset-11">
                     <h1>Check Your Fight Record of APEX</h1>
                  </div> 
               </div>
            </div>
        )
    }
}

export default Header;