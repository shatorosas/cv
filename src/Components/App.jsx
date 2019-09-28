import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./app.css";

import Menu from "./Menu";
import Resume from "./Resume";
import Contact from "./Contact";
import Works from "./Works";
import Profile from "./Profile";

const App = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #50a3a2 0%, #78cc6d 100%)"
      }}
    >
      <div className="app container">
        <Container className="app__container" fluid={true} as="div">
          <Row>
            <Col sx={12} m={12} l={4} >
              <Menu />
            </Col>
            <Col sx={12} m={12} l={4}>
              <Profile />
            </Col>
            <Col sx={12} m={12} l={4}>
              <Resume />
            </Col>
          </Row>
          <Contact />
          <Works />
        </Container>
      </div>
    </div>
  );
};

export default App;
