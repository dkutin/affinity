import React, { Component } from 'react';
import Social from './Social';

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
            <Social />
        </div>);
    }
}

export default Header; 