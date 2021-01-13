import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Image from '../assets/img/graph1.png'

class Home extends Component {
  

  render() {
    return (
      <Grid container >
      <Grid container className="affinity__home--background">
        <Grid item xs className="" />
        <Grid item xs={6} style={{marginTop: "72px"}}>
          <div className="affinity__home--header">
            <h1 class="affinity__home--title"> 
              Discover how your music taste has changed. 
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
            </p>
          </div>
        </Grid>
        <Grid item xs className="" />
      </Grid>
      <Grid container>
      <Grid item xs className="" />
      <Grid item xs={8} style={{marginTop: "72px"}}>
        <div className="affinity__home--intro">
          <h2 class="affinity__home--subtitle">Visualize your library.</h2>
          <Grid container>
            <Grid item xs={6}>
              <div className="affinity__home--cta--items">
                <div className="affinity__home--cta--item">
                  <h4>See your listening habits</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. </p>
                </div>
                <div className="affinity__home--cta--item">
                  <h4>Explore New Genres</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="affinity_home--cta--items right">
                <div className="affinity_home--cta--item">
                  <div className="affinity__home--image">
                    <img src={Image} alt="A graph displaying songs metrics" />
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="affinity__home--image">
                <img src={Image} alt="A graph displaying songs metrics" />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="affinity__home--cta--items right">
                <div className="affinity__home--cta--item">
                  <h4>See your listening habits</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. </p>
                </div>
                <div className="affinity__home--cta--item">
                  <h4>Explore New Genres</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs className="" />
    </Grid>
    </Grid>
    );
  }
}

export default Home; 