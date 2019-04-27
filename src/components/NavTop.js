import React, { Component } from 'react';
import '../css/NavTop.css';

class NavTop extends Component {

  portrait() {
    document.getElementById("home-img").src = "./img/ben.jpg";
    document.getElementById("home-img").style.border = "1.2px solid white";
  }

  event() {
    document.getElementById("home-img").src = "./img/artpile-square.jpg";
    document.getElementById("home-img").style.border = "1.2px solid white";
  }

  defaultimg() {
    document.getElementById("home-img").src = "./img/black-full-square.png";
    document.getElementById("home-img").style.border = "1.2px solid #505050";
  }

  render() {
    return (
      <nav id="nav-t">
        <ul className="navbar-nav">
          <li className="nav-t-item">
            <a className="nav-t-link" href="../Portrait.js" onMouseOver={this.portrait} onMouseOut={this.defaultimg}>portrait</a>
          </li>
          <li className="nav-t-item">
            <a className="nav-t-link" href="../Event.js" onMouseOver={this.event} onMouseOut={this.defaultimg}>event</a>
          </li>
        </ul>
      </nav>
    );
  }

}

export default NavTop;
