import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './components/Navigation';
import Home from './containers/Home';
import Contact from './containers/Contact';

export default function App() {
  return (
    <Router>
      <div>
      <Navigation /> 
        <Switch>          
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
