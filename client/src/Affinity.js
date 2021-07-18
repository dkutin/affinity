import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

// Import Page Components
import Chart from './components/Chart';

// Import Spotify Web API Handler
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class Affinity extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      audio_features: [],
      items: []
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  componentDidMount() {
    spotifyApi.getMySavedTracks({ limit: 50 })
      .then((response) => {
        let tracklist = [];
        let tracks = response.items;
        response.items.map((item) =>
          tracklist.push(item.track.id)
        );
        spotifyApi.getAudioFeaturesForTracks(tracklist)
          .then((response) => {
            this.setState({
              audio_features: response.audio_features,
              items: tracks,
            })
          }, function (err) {
            console.log(err)
          });
      }, function (err) {
        console.log(err)
      });
  }

  render() {
    if (!this.state.items || !this.state.audio_features) {
      return <div className="App">Waiting...</div>
    }
    return (
      <Grid container>
        <Grid container className="affinity__home--background">
          <Grid item xs />
          <Grid container item xs={10} lg={8} xl={6}>
            <Grid item xs={10} lg={8}>
              <div className="affinity__home--header">
                <h1 className="affinity__home--title">Let's dive in.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid item xs />
        </Grid>
        <Grid container className="affinity__app--chart-container">
          <Grid item xs />
          <Grid item xs={10} lg={8} xl={6}>
            <Grid item xs={12}>
              <div className="affinity__app--intro-text">
                <h2>Your top 50 liked songs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
              </div>
              <div style={{ marginTop: "24px", marginBottom: "48px" }}>
                <Chart tracks={this.state.items} features={this.state.audio_features} />
              </div>
            </Grid>
          </Grid>
          <Grid item xs />
        </Grid>
      </Grid>
    );
  }
}

export default Affinity;
