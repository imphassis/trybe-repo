import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { About, Contact, Home, Projects, NotFound, Header } from './pages/Zindex';

function App() {
  return (
    <div className="App">
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link> */}
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route exact path="/contact" render={(props) => <Contact {...props} />} />
        <Route exact path="/projects" render={(props) => <Projects {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
