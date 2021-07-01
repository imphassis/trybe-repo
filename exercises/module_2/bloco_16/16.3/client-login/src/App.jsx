/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Clients, Home, Login, NotFound,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path="/clients" render={(props) => <Clients {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
