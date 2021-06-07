import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    const user = {
      username: 'joao',
      password: 1234,
    };
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route
          path="/users/:id"
          render={(props) => <Users {...props} greetingsMessage="Good Evening" />}
          greetingMessage="Good Morning"
          exact
        />
        <Route path="/about" component={About} exact />
        <Route
          path="/strict-access"
          render={(props) => <StrictAccess {...props} user={user} />}
          exact
        />
      </Switch>
    );
  }
}

export default App;
