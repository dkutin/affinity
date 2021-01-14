import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";

import Image2 from '../assets/img/graph1.png'
import Image from '../assets/img/graph2.png'


class Home extends Component {
  

  render() {
    return (
      <Grid container >
      <Grid container className="affinity__home--background">
        <Grid item xs className="" />
        <Grid item xs={10} md={8} lg={6}>
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
      <Grid item xs={10} md={8} lg={6}>
        <div className="affinity__home--intro">
          <h2 class="affinity__home--subtitle">Visualize your library.</h2>
          <Grid container className="affinity__home--info">
            <Grid item xs={10} md={8} lg={6}>
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
            <Grid item xs={12} md={8} lg={6}>
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
          <h2 class="affinity__home--subtitle"></h2>
            <Grid item xs={12} md={8} lg={6}>
            <div className="affinity__home--cta--items">
              <div className="affinity__home--cta--item">
                <div className="affinity__home--image">
                  <img src={Image2} alt="A graph displaying songs metrics" />
                </div>
              </div>
            </div>
            </Grid>
            <Grid item xs={10} md={8} lg={6}>
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
            <Grid item xs={10} md={12}>
              <div className="affinity__home--cta">
                <Link className="link--large" to="/app">
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

export default Home; 