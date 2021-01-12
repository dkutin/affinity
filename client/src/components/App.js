import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Affinity from '../pages/Affinity';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/app" component={Affinity}/>
      </Switch>
    </div>
  );
}

export default App;