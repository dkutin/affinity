import React, { Component } from 'react';
import Chart from './components/Chart';
import Login from './components/Login';
import Header from './components/Header';
// import Footer from './components/Footer';
import SpotifyWebApi from 'spotify-web-api-js';


import './App.css';

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
    spotifyApi.getMySavedTracks({limit : 25})
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
        state = <React.Fragment>
                    <Header />
                    <Chart tracks={this.state.items} features={this.state.audio_features}/>
                    {/* <Footer /> */}
                </React.Fragment> : 
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
