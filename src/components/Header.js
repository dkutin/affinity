import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (    
        <div className="splash post">
            <div className="feature">
                <span> Great! Let's check your </span>
                <h1> Affinity </h1>
            </div>
            
            <div className="feature analytics">
                <span> Your Highest Scores:</span>
                <p>&nbsp;</p>
                <p>This is just a placeholder for now...</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

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
        </div>);
    }
}

export default Header; 