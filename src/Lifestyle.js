import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './css/Photopage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Lifestyle extends Component {
  render() {
    return(
      <Container>
        <h1 className = "page-header">lifestyle</h1>
        <Navbar/>
        <Row className="img-row">
          <Col lg={6} xl={6}>
            <img src="./img/board.jpg" alt="board" className="photo"/>
          </Col>
          <Col lg={6} xl={6}>
            <img src="./img/dodge.jpg" alt="dodge" className="photo"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Lifestyle;
