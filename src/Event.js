import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './css/Photopage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './components/Footer';

class Event extends Component {
  render() {
    return(
      <div>
        <Container>
          <h1 className = "page-header">event</h1>
          <Navbar/>

          <Row className="img-row">
            <Col lg={6} xl={6}>
              <img src="./img/artpile.jpg" alt="artpile" className="photo"/>
            </Col>
            <Col lg={6} xl={6}>
              <img src="./img/pjw.jpg" alt="pjw" className="photo"/>
            </Col>
          </Row>
        </Container>

        <Footer/>
      </div>
    );
  }
}

export default Event;
