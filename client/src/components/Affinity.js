import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

// Import Page Components
import Chart from './Chart';

// Import Spotify Web API Handler
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class Affinity extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      audio_features : [],
      items : [],
      tracks : []
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
    spotifyApi.getMySavedTracks({limit : 25})
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
    if (!this.state.loggedIn) {
      return <Redirect to="/login" />
    }
    if (!this.state.items || !this.state.audio_features) {
      return <div className="App">Waiting...</div>
    }
    return (
      <div className="App">
        <Chart tracks={this.state.items} features={this.state.audio_features}/>
      </div>
    );
  }
}

export default Affinity;
