import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Home from './Home';
import Affinity from './Affinity';
import Nav from './Nav';

const App = () => {
  return (
    <main>
      <Grid container className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/app" component={Affinity} />
          <Route exact path="/login" render={() => (window.location.reload())} />
        </Switch>
      </Grid>
    </main>
  );
}

export default App;