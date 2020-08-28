import React, { Component } from 'react';


class Login extends Component {

    render() {
      return (
        <div>
        <div className="splash">
          <div className="intro">
            <div className="feature">
                <h1> Affinity </h1>
                <p> a Spotify visualizer. </p>
            </div>
            <div className="links">
                <ul>
                    <li>
                    <a href="https://github.com/dkutin">
                        <div className="icons github-icon">
                            &nbsp;
                        </div>
                    </a>
                    </li>
                    <li>
                    <a href="https://github.com/dkutin">
                        <div className="icons spotify-icon">
                            &nbsp;
                        </div>
                    </a>
                    </li>
                    <li>
                    <a href="https://github.com/dkutin">
                        <div className="icons source-icon">
                            &nbsp;
                        </div>
                    </a>
                    </li>
                </ul>
              </div>
          </div>
        </div>
        <div className="login">  
            <h2> Ever wonder how your music taste has progressed over the years? </h2>
            <h3> we take the top 50 songs in your liked library and create a visual representation of your music, for you. We just need you to authorize a few things first. </h3>
            <a href={"https://affinity-281921.uc.r.appspot.com/login"}  >
              <div className="home-button"> 
                <p>lets get started.</p>
              </div>
            </a>
          </div>
        </div>
      );
    }
}

export default Login; 