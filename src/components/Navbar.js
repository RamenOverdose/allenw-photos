import React, { Component } from 'react';
import '../css/Navbar.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Navbar extends Component {
  render() {
    return (
      <Container id="nav">
        <head>
          <link
            rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
        </head>
        <Row>
          <Col md={6} lg={3} xl={3}>
            <a className="nav-link" href="../Portrait.js">portrait</a>
          </Col>
          <Col md={6} lg={3} xl={3}>
            <a className="nav-link" href="../Event.js">event</a>
          </Col>
          <Col md={6} lg={3} xl={3}>
            <a className="nav-link" href="/">lifestyle</a>
          </Col>
          <Col md={6} lg={3} xl={3}>
            <a className="nav-link" href="/">about</a>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default Navbar;
