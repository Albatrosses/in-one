import React from "react";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import { map } from "lodash";
import plugins from "./config";

const history = createBrowserHistory();

const RouterControl = () => {
  return (
    <Router history={history}>
      <Switch>
        {map(plugins, (plugin) => {
          const { name, path, exact, component } = plugin;
          return (
            <Route key={name} path={path} exact={exact} component={component} />
          );
        })}
      </Switch>
    </Router>
  );
};

export default RouterControl;
