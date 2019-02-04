import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './containers/App.connect';

export const routes = (
  <Switch>
    <Route exact={true} path="/" component={App} />
  </Switch>
);
