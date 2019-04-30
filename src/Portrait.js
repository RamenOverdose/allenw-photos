import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './css/Photopage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './components/Footer';

class Portrait extends Component {
  render() {
    return(
      <div>
        <Container>
          <h1 className = "page-header">portrait</h1>
          <Navbar/>

          <Row className="img-row">
            <Col lg={6} xl={6}>
              <img src="./img/ben.jpg" alt="ben" className="photo"/>
              <img src="./img/kevin.jpg" alt="kevin" className="photo"/>
            </Col>
            <Col lg={6} xl={6}>
              <img src="./img/billy.jpg" alt="billy" className="photo"/>
              <img src="./img/arpan.jpg" alt="arpan" className="photo"/>
            </Col>
          </Row>
        </Container>

        <Footer/>
      </div>
    );
  }
}

export default Portrait;
