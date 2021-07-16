import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

import Image from './assets/img/graph1.png'
import Image2 from './assets/img/graph2.png'


class About extends Component {
  
  render() {
    return (
      <Grid container >
      <Grid container className="affinity__home--background">
        <Grid item xs className="" />
        <Grid item xs={10} lg={8} xl={6}>
          <div className="affinity__home--header">
            <h1 className="affinity__home--title"> 
              Affinity, for Spotify
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
      <Grid item xs={10} lg={8} xl={6}>
        <div className="affinity__home--intro">
          <h2 className="affinity__home--subtitle">See your top genres.</h2>
          <Grid container className="affinity__home--info">
            <Grid item xs={10} md={6}>
              <div className="affinity__home--cta--items">
                <div className="affinity__home--cta--item">
                  <h4>See your listening habits</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. </p>
                </div>
                <div className="affinity__home--cta--item">
                  <h4>Explore New Genres</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="affinity__home--cta--items right">
                <div className="affinity__home--cta--item">
                  <div className="affinity__home--image">
                    <img src={Image} alt="A graph displaying songs metrics" />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container className="affinity__home--info">
            <Grid item xs={10} lg={8}>
              <h2 className="affinity__home--subtitle">Visualize your library.</h2>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="affinity__home--cta--items">
                <div className="affinity__home--cta--item">
                  <div className="affinity__home--image">
                    <img src={Image2} alt="A graph displaying songs metrics" />
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={10} md={6}>
              <div className="affinity__home--cta--items right">
                <div className="affinity__home--cta--item">
                  <h4>See your listening habits</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. </p>
                </div>
                <div className="affinity__home--cta--item">
                  <h4>Explore New Genres</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. </p>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container className="affinity__home--info">
            <Grid item xs={12}>
              <div className="affinity__home--cta">
                <Link className="link--large" to="/login">
                  <span>
                    Let's get started
                  </span>
                  <ArrowForward className="colorPrimary fontSizeSmall" />
                </Link>
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

export default About; 