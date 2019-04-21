import React, { Component } from 'react';
import '../css/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top scrolling-navbar" id="nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">portrait</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">event</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">lifestyle</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">about</a>
          </li>
        </ul>
      </nav>
    );
  }

}

export default Navbar;
