import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import loadComponents from './loadComponents';
import Home from './Home';

function App() {
  const allComponents = loadComponents();

  console.log(allComponents);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Home allComponents={allComponents} />} />
        {Object.values(allComponents).map(Component => {
          return (
            <Route
              test={Component.routePath}
              key={Component.routePath}
              path={Component.routePath}
              component={Component.component}
            />
          );
        })}
        <Route component={() => <div>No route found</div>} />
      </Switch>
    </Router>
  );
}

export default App;
