import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {routes} from './routes';

const Routes = routes.map((route) => {
    const {path, component, exact} = route;
    return (
    <Route 
        key={path}
        path={path}
        component={component}
        exact={exact}    
    />
    )
})

function App() {
  return (
      <Router>
          <Switch>
              {Routes}
          </Switch>
      </Router>
  );
}

export default App;
