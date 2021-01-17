import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

class Footer extends Component {
	render() {
		return (
			<footer className="affinity__footer">
				<Grid container style={{ textAlign: "center" }} >
					<Grid item xs className="" />
					<Grid item container xs={10} lg={8} xl={6}>
						<Grid item xs={12} sm={4} className="affinity__footer--spacing affinity__footer--links">
							<Link className="link" to={"/home"}>
								<span className="affinity__nav--text">Home</span></Link>
							<Link className="link" to={"/login"}><span className="affinity__nav--text">Login</span></Link>
							<Link className="link" to={"/about"}><span className="affinity__nav--text">About</span></Link>
							<Link className="link" to={"/contact"}><span className="affinity__nav--text">Contact</span></Link>
						</Grid>
						<Grid item xs={12} sm={4} className="affinity__footer--spacing">
							<p className="affinity__footer--text">Made with <span role="img" aria-label="heart">❤️</span> and <span role="img" aria-label="coffee">☕️</span></p>
						</Grid>
						<Grid item xs={12} sm={4} className="affinity__footer--spacing affinity__footer--icons">
							<a className="link" href={"https://github.com/dkutin"}>
								<GitHubIcon />
							</a>
							<a className="link" href={"https://github.com/dkutin/affinity"}>
								<CodeIcon />
							</a>
							<a className="link" href={"https://open.spotify.com/user/dmitryhawks?si=L6uSegpKQh6_T_VhWWGc6g"}>
								<MusicNoteIcon />
							</a>
						</Grid>
					</Grid>
					<Grid item xs className="" />
				</Grid>
			</footer>
		);
	}
}

export default Footer;