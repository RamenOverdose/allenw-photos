import React, { Component } from 'react';
import Navbar from './components/Navbar';
import NavTop from './components/NavTop';
import NavBottom from './components/NavBottom';
import './css/Home.css';

class Home extends Component {
  render() {
    return (
      <div id="home-layout">
        <NavTop/>
        <img src="./img/black-full-square.png" alt="home" id="home-img" />
        <NavBottom/>
      </div>
    );
  }
}

export default Home;
