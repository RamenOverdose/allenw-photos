import React, { Component } from 'react';
import '../css/NavBottom.css';

class NavBottom extends Component {

  lifestyle() {
    document.getElementById("home-img").src = "./img/board-square.jpg";
    document.getElementById("home-img").style.border = "1.2px solid white";
  }

  about() {
    document.getElementById("home-img").src = "./img/profile-square.jpg";
    document.getElementById("home-img").style.border = "1.2px solid white";
  }

  defaultimg() {
    document.getElementById("home-img").src = "./img/black-full-square.png";
    document.getElementById("home-img").style.border = "1.2px solid #505050";
  }

  render() {
    return (
      <nav id="nav-b">
        <ul className="navbar-nav">
          <li className="nav-b-item">
            <a className="nav-b-link" href="../Lifestyle.js" onMouseOver={this.lifestyle} onMouseOut={this.defaultimg}>lifestyle</a>
          </li>
          <li className="nav-b-item">
            <a className="nav-b-link" href="../About.js" onMouseOver={this.about} onMouseOut={this.defaultimg}>about</a>
          </li>
        </ul>
      </nav>
    );
  }

}

export default NavBottom;
