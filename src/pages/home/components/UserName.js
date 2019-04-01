import React, { Component } from 'react';

import PropTypes from 'prop-types';

class UserName extends Component {
    constructor(props){
        super(props);
        this.changeText = this.changeText.bind(this);
        this.getText = this.getText.bind(this);

        this.state = {
            name:"",
            showError:false,
        }
    }

    cleanText(){

    }

    getText(){
        let {name} = this.state;
        if( name === ""){
            this.setState({
                showError:true
            });
        }else{
            this.setState({
                showError:false
            });
        }
    }

    changeText(event){
        this.setState({
            name:event.target.value
        });
    }

    render() {
        let {name, showError} = this.state;

        return (
            <div className="container">
               <div className="row">
                  <div className="col-xs-1 col-xs-offset-11">
                  <p>User Name: </p> 
                  <row className="input-content">
                    <input placeholder= "Input your ID" type="text" onChange = {this.changeText} value={name} />
                    <button type="primary" onClick={this.cleanText}>Clean Input</button>
                    <button type="primary" onClick={this.getText}>Submit</button>
                  </row>
                  <div>
                      {
                          showError && <div style={{ color:'red'}}>Please input corroct ID.</div>
                      }
                  </div>
                  </div> 
               </div>
            </div>
        )
    }
}

UserName.propTypes = {
    myInput: PropTypes.string
};
export default UserName;