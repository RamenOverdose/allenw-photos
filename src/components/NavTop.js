import React, { Component } from 'react';
import '../css/NavTop.css';

class NavTop extends Component {

  portrait() {
    document.getElementById("home-img").src = "./img/ben.jpg";
  }

  event() {
    document.getElementById("home-img").src = "./img/artpile-square.jpg";
  }

  defaultimg() {
    document.getElementById("home-img").src = "./img/black-full-square.png";
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top scrolling-navbar" id="nav-t">
        <ul className="navbar-nav mr-auto">
          <li className="nav-t-item">
            <a className="nav-t-link" href="/" onMouseOver={this.portrait} onMouseOut={this.defaultimg}>portrait</a>
          </li>
          <li className="nav-t-item">
            <a className="nav-t-link" href="/" onMouseOver={this.event} onMouseOut={this.defaultimg}>event</a>
          </li>
        </ul>
      </nav>
    );
  }

}

export default NavTop;
