import React, { Component } from 'react';
import Home from './Home';
import Portrait from './Portrait';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Portrait.js" component={Portrait}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
