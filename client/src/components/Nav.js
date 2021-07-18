import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Icon from '../assets/img/favicon.png'
import { useTranslation } from 'react-i18next';

function Nav() {
	const [lang, setLang] = useState('en');
	const [t, i18n] = useTranslation();

	useEffect(() => { document.title = t('site.title') }, [t, lang]);

	const handleLangChange = () => {
		const newLang = lang === 'en' ? 'fr' : 'en'

		i18n.changeLanguage(newLang);
		setLang(newLang);
	}

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
							<NavLink className="affinity__nav--link" to={"/survey"} >
								<span className="affinity__nav--text">{t('navBar.launch')}</span>
							</NavLink>
						</div>
						<div className="affinity__nav--item">
							<NavLink className="affinity__nav--link" to="/explore">
								<span className="affinity__nav--text">{t('navBar.explore')}</span>
							</NavLink>
						</div>
						<div className="affinity__nav--item">
							<NavLink className="affinity__nav--link" to="/about">
								<span className="affinity__nav--text">{t('navBar.about')}</span>
							</NavLink>
						</div>
						<div className="affinity__nav--item">
							<hr />
						</div>
						<div className="affinity__nav--item">
							<button className="affinity__nav--link" onClick={handleLangChange}>
								<span className="affinity__nav--text">{t('navBar.langSwitcher')}</span>
							</button>
						</div>
					</div>
				</Grid>
				<Grid item xs className="" />
			</Grid>
		</nav>
	)
}

export default Nav;