import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import ArrowBack from '@material-ui/icons/ArrowBackIos';

import {
	LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Chart extends PureComponent {
	constructor() {
		super();
		this.state = { 
			offset: 0,
			paging: 5,
			increment: 5
		}
	}

	pageUp = () => {
		if (this.state.offset < 9) {
			this.setState({ 
				offset: this.state.offset + 1, 
				paging: this.state.paging + this.state.increment
			});
		}
	}

	pageDown = () => {
		if (this.state.offset > 0) {
			this.setState({ 
				offset: this.state.offset - 1,
				paging: this.state.paging - this.state.increment
			});
		}
	}

	render() {
		const tracks = this.props.tracks.slice(this.state.offset * 5, this.state.paging);
		const features = this.props.features.slice(this.state.offset * 5, this.state.paging);
		const total = this.props.tracks.length / this.state.increment;

		const data = tracks.map((track, index) => {
			return ({
				name: track.track.name,
				danceability: features[index].danceability,
				energy: features[index].energy,
				liveness: features[index].liveness,
				valence: features[index].valence
			})
		});

		return (
			<Grid container>
				<Grid item xs={10}>
					<LineChart
						layout="horizontal"
						width={960}
						height={660}
						data={data}
						margin={{
							top: 20, right: 30, left: 0, bottom: 5,
						}}
						padding={{
							left: -12
						}}
					>
						<CartesianGrid strokeDasharray="6 6" />
						<YAxis type="number" height={60} />
						<XAxis dataKey="name" type="category" />
						<Tooltip />
						<Legend />
						<Line dataKey="danceability" stroke="#8884d8" />
						<Line dataKey="energy" stroke="#FFE74C" />
						<Line dataKey="liveness" stroke="#F87970" />
						<Line dataKey="tempo" stroke="#82ca9d" />
						<Line dataKey="valence" stroke="#EC7594" />
					</LineChart>
				</Grid>
				<Grid item xs={10} style={{textAlign: 'center'}}>
					<div className="pager">
						<button className="pager--button back" onClick={this.pageDown}>
							<ArrowBack className="colorPrimary fontSizeSmall" />
						</button>
						<button className="pager--button" onClick={this.pageUp}>
							<ArrowForward className="colorPrimary fontSizeSmall" />
						</button>
						<span className="pager--info">Page { this.state.offset >= 0 ?  this.state.offset + 1 : 0 } of {total}</span>
					</div>
				</Grid>
			</Grid>
		);
	}
}

export default Chart;