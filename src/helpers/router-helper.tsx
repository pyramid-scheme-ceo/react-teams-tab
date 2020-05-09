import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes as routeDefinitions } from '../config';
import { RouteDefinition } from '../models/route-definition';
import { Login } from '../pages/auth';

export default class RouterHelper {
  public static AuthenticatedRoutes(): JSX.Element {
    return RouterHelper.RenderRoutes(routeDefinitions);
  }

  public static UnauthenticatedRoutes(): JSX.Element {
    let copyOfRoutes = routeDefinitions;

    for (let route of copyOfRoutes) {
      if (route.authenticated) {
        route.component = <Login />
      }
    }

    return RouterHelper.RenderRoutes(copyOfRoutes);
  }

  private static RenderRoutes(routes: RouteDefinition[]): JSX.Element {
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