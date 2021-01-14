import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

class Nav extends Component {
    render() {
        return (
            <nav className="affinity__nav">
                <Grid container>
                    <Grid item xs className="" />
                    <Grid item xs={10} md={8} lg={6}>
                        <div className="affinity__nav--items">
                            <div className="affinity__nav--item launch">
                                <Link className="affinity__nav--link" to="/app">
                                    <span className="affinity__nav--text">Launch</span>
                                </Link>
                            </div>
                            <div className="affinity__nav--item">
                                <Link className="affinity__nav--link" to="/about">
                                    <span className="affinity__nav--text">About</span>
                                </Link>
                            </div>
                            <div className="affinity__nav--item">
                                <Link className="affinity__nav--link" to="/contact">
                                    <span className="affinity__nav--text">Contact</span>
                                </Link>
                            </div>
                            <div className="affinity__nav--item">
                                <hr/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs className="" />
                </Grid>
            </nav>
        )
    }
}

export default Nav;