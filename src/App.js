import React, { Component } from 'react';
import './App.css';
import TrackData from './components/TrackData';
import Login from './components/Login';


import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
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

  getUserTracks(){
    spotifyApi.getMySavedTracks({limit : 50})
    .then((response) => {
      this.setState({
        items : response.items,
      });
      var ids = [];
      response.items.map((item) =>
        ids.push(item.track.id)
      );
      
      spotifyApi.getAudioFeaturesForTracks(ids)
        .then((response) => {
          this.setState({
            audio_features : response.audio_features
          })
      }, function (err) {
        console.log(err)
      })
    }, function (err) {
      console.log(err)
    })
  }

  render() {
    let state;
    if (this.state.loggedIn) {
      (this.state.items && this.state.audio_features) ? 
        state = <TrackData tracks={this.state.items} features={this.state.audio_features}/> : 
        this.getUserTracks();
    } else {
      state = <Login />
    }
    
    return (
      <div className="App">
        {state}
      </div>
    );
  }
}

export default App;
