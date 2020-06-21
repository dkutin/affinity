import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (    
        <div className="header">
            <div className="feature">
                <span> Welcome to </span>
                <h1> Affinity </h1>
                <p> A Spotify Application</p>
            </div>
            <div className="links">
                <ul>
                    <li>
                    <a href="https://github.com/dkutin">
                        <div className="button">
                            Github
                        </div>
                    </a>
                    </li>
                    <li>
                    <a href="https://github.com/dkutin">
                        <div className="button">
                            Spotify
                        </div>
                    </a>
                    </li>
                    <li>
                    <a href="https://github.com/dkutin">
                        <div className="button">
                            Source
                        </div>
                    </a>
                    </li>
                </ul>
            </div>
        </div>);
    }
}

export default Header; 