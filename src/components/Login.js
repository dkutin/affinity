import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (<div className="login">  
        <h2> Ever wonder how your music taste has progressed over the years? </h2>
        <p> This web application, built in React, allows for a visual representation of your change in music taste over the years. </p>
        <a href='http://localhost:8888' >
          <div className="home-button"> 
            Lets get started
          </div>
        </a>
        </div>);
    }
}

export default Login; 