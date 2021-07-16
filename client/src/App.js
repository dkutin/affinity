import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Home from './Home';
import About from './About';
import Survey from './Survey';
import Explore from './Explore';
import Nav from './components/Nav';
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <Grid container className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/survey" component={Survey} />
          <Route exact path="/explore"  component={Explore}/>
          <Route exact path="/about" component={About}/>
        </Switch>
        <Footer />
      </Grid>
    </main>
  );
}

export default App;