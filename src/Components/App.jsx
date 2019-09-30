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
          <Row className="justify-content-md-center">
            <Col xs={12} md={12} lg={1}>
              <Menu />
            </Col>
            <Col xs={12} md={12} lg={5}>
              <Profile />
            </Col>
            <Col xs={12} md={12} lg={6}>
              <Works  />
              <Resume className="hide"/>
              <Contact className="hide"/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
