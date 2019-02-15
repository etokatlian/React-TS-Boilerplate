import React from 'react';
import { Route, Switch } from 'react-router-dom';

// routes
import PageOne from './containers/App.connect';
import PageTwo from './pages/PageTwo';

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={PageOne} />
      <Route exact={true} path="/pagetwo" component={PageTwo} />
    </Switch>
  );
};

export default Routes;
