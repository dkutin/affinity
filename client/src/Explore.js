import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import ArtistCard from './components/ArtistCard';

const EXPLOREARTISTS = [
  {
    name: 'Still Woozy',
    image: 'https://i.scdn.co/image/ab6761610000e5eb213487aac43637b03baf9db8',
    genre: 'Indie',
    songs: [
      'Foolsong',
      'Goodie Bag',
      'Cooks'
    ],
    artists: [
      'Peach Pit'
    ]
  },
  {
    name: 'Peach Pit',
    image: 'https://i.scdn.co/image/ab6761610000e5ebb95318e678c40fc2f02c0722',
    genre: 'Indie',
    songs: [
      'Techno Show',
      'Tommy\'s Party',
      'Alrighty Aphrodite'
    ],
    artists: [
      'Still Woozy'
    ]
  },
  {
    name: 'Culture Abuse',
    image: 'https://i.scdn.co/image/ab67616d0000b2730e46c4155e5e065415112a13',
    genre: 'Rock',
    songs: [
      'Bee kind to the Bugs',
      'California',
      'Jealous'
    ],
    artists: [
      'Peach Pit'
    ]
  },
  {
    name: 'Dreamer Boy',
    image: 'https://i.scdn.co/image/ab6761610000e5eb67c2b18555ae925034241816',
    genre: 'Indie',
    songs: [
      'Puppy Dog',
      'Lavendar',
      'Don\'t Be a Fool'
    ],
    artists: [
      'Huron John',
      'Jelani Aryeh',
      'LAUNDRY DAY'
    ]
  },
  {
    name: 'Mac Miller',
    image: 'https://i.scdn.co/image/ab6761610000e5ebed3b89aa602145fde71a163a',
    genre: 'Rap',
    songs: [
      'The Spins',
      'Self Care',
      'Weekend (feat. Miguel)'
    ],
    artists: [
      'KIDS SEE GHOSTS',
      'A$AP Rocky',
      'Pusha T'
    ]
  },
  {
    name: 'Greys',
    image: 'https://i.scdn.co/image/7c0233cfd0390a754573ea26beb6f4574dbebd0a',
    genre: 'Punk Rock',
    songs: [
      'The Voyeur',
      'Blown Out',
      'Minus Time'
    ],
    artists: [
      'Metz',
      'Big Ups',
      'Meat Wave'
    ]
  }
];

class Explore extends Component {

  render() {
    return (
      <Grid container >
        <Grid container className="affinity__home--background">
          <Grid item xs className="" />
          <Grid item xs={10} lg={8} xl={6}>
            <div className="affinity__home--header">
              <h1 className="affinity__home--title">
                Can't pick a favourite? You've come to the right place.
              </h1>
              <p>
                See who others are choosing & listening to, as they use Affinity to further their music tastes. 
              </p>
            </div>
          </Grid>
          <Grid item xs className="" />
        </Grid>
        <Grid container>
          <div className="divider" />
          <Grid item xs className="" />
          <Grid item xs={10} lg={8} xl={6}>
            <Grid container>
              {EXPLOREARTISTS.map((e, i) => {
                return <ArtistCard info={e} key={i} border={true}/>
              })}
            </Grid>
          </Grid>
          <Grid item xs className="" />
        </Grid>
      </Grid>
    );
  }
}

export default Explore;