import React, { Component } from 'react';


class Social extends Component {

	render() {
		return (
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
						<a href="https://open.spotify.com/user/dmitryhawks?si=ot3A9bMLSNeFlIFndcn7Kw">
							<div className="icons spotify-icon">
								&nbsp;
                    </div>
						</a>
					</li>
					<li>
						<a href="https://github.com/dkutin/affinity">
							<div className="icons source-icon">
								&nbsp;
                    </div>
						</a>
					</li>
				</ul>
			</div>);
	}
}

export default Social; 