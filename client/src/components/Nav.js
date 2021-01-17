import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Icon from '../assets/img/favicon.png'

class Nav extends Component {
	render() {
		return (
			<nav className="affinity__nav">
				<Grid container>
					<Grid item xs className="" />
					<Grid item xs={10} lg={8} xl={6}>
						<div className="affinity__nav--items">
							<div className="affinity__nav--item icon">
								<NavLink className="affinity__nav--icon" to={"/"}>
									<img src={Icon} alt="Affinity" />
								</NavLink>
							</div>
							<div className="affinity__nav--item launch">
								<NavLink className="affinity__nav--link" to={"/login"} >
									<span className="affinity__nav--text">Launch</span>
								</NavLink>
							</div>
							<div className="affinity__nav--item">
								<NavLink className="affinity__nav--link" to="/about">
									<span className="affinity__nav--text">About</span>
								</NavLink>
							</div>
							<div className="affinity__nav--item">
								<NavLink className="affinity__nav--link" to="/contact">
									<span className="affinity__nav--text">Contact</span>
								</NavLink>
							</div>
							<div className="affinity__nav--item">
								<hr />
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