import React, { Component } from 'react';
import Home from './Home';
import Portrait from './Portrait';
import Event from './Event';
import Lifestyle from './Lifestyle';
import About from './About';
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
            <Route exact path="/Event.js" component={Event}/>
            <Route exact path="/Lifestyle.js" component={Lifestyle}/>
            <Route exact path="/About.js" component={About}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
