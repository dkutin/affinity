import React from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';

import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function Footer() {

	const [t,] = useTranslation();

	return (
		<footer className="affinity__footer">
			<Grid container style={{ textAlign: "center" }} >
				<Grid item xs className="" />
				<Grid item container xs={10} lg={8} xl={6}>
					<Grid item xs={12} sm={4} className="affinity__footer--spacing affinity__footer--links">
						<Link className="link" to={"/"}>
							<span className="affinity__nav--text">{t('footer.home')}</span></Link>
						<Link className="link" to={"/survey"}><span className="affinity__nav--text">{t('footer.launch')}</span></Link>
						<Link className="link" to={"/explore"}><span className="affinity__nav--text">{t('footer.explore')}</span></Link>
						<Link className="link" to={"/about"}><span className="affinity__nav--text">{t('footer.about')}</span></Link>
					</Grid>
					<Grid item xs={12} sm={4} className="affinity__footer--spacing">
						<p className="affinity__footer--text">{t('footer.callout.start')} <span role="img" aria-label="heart">❤️</span> {t('footer.callout.end')} <span role="img" aria-label="coffee">☕️</span></p>
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

export default Footer;