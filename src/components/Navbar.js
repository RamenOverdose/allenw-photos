import React, { Component } from 'react';
import '../css/Navbar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Navbar extends Component {
  render() {
    return (
      <Container id="nav">
        <link
          rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <Row>
          <Col sm={6} md={6} lg={3} xl={3}>
            <a className="nav-link" href="../Portrait.js">portrait</a>
          </Col>
          <Col sm={6} md={6} lg={3} xl={3}>
            <a className="nav-link" href="../Event.js">event</a>
          </Col>
          <Col sm={6} md={6} lg={3} xl={3}>
            <a className="nav-link" href="../Lifestyle.js">lifestyle</a>
          </Col>
          <Col sm={6} md={6} lg={3} xl={3}>
            <a className="nav-link" href="../About.js">about</a>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default Navbar;
