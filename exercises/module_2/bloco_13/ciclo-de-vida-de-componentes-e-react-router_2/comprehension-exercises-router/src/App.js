import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    const user = {
      username: 'joao',
      password: 1234,
    };
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          {/* prettier-ignore */}
          <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Evening" />} />
          <Route path="/about" component={About} exact />
          {/* prettier-ignore */}
          <Route path="/strict-access" render={(props) => <StrictAccess {...props} user={user} />} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
