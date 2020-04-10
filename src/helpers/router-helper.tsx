import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from '../config';

export default class RouterHelper {
  public static RenderRoutes(): JSX.Element {
    return (
      <Router>
        <Switch>
          {routes.map(route =>
            <Route path={route.route} exact={route.route === '/'}>
              {route.component}
            </Route>
          )}
        </Switch>
      </Router>
    );
  }
}