import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./app.css";

import Menu from "./Menu";
import Contact from "./Contact";
import Works from "./Works";
import Profile from "./Profile";
import About from "./About";
import Resume from "./Resume/Resume";
import Skills from "./Skills/Skills.jsx";

class App extends React.Component {
  state = {
    aboutActive: true,
    skillsActive: false,
    resumeActive: false,
    worksActive: false,
    contactActive: false
  };

  render() {
    return (
      <div
        className="row justify-content-center align-items-center"
        style={{
          background:
            "linear-gradient(to bottom right, #50a3a2 0%, #78cc6d 100%)",
          height: "100vh",
          width: "auto",
          overflow: "hidden"
        }}
      >
        <Container className="app__container" as="div">
          <Row className="justify-content-center align-items-center">
            <Col md={12} lg={1}>
              <Row
                className="justify-content-end"
                style={{ marginRight: "0px" }}
              >
                <Menu
                  onClick={selected => {
                    this.setState({
                      aboutActive: selected === "about",
                      skillsActive: selected === "skills",
                      resumeActive: selected === "resume",
                      worksActive: selected === "works",
                      contactActive: selected === "contact"
                    });
                  }}
                />
              </Row>
            </Col>
            <Col md={12} lg={5} className="no-left-padding no-right-padding">
              <Profile />
            </Col>
            <Col md={12} lg={6} className="no-left-padding no-right-padding">
              <div>
                <About active={this.state.aboutActive} />
                <Skills active={this.state.skillsActive} />
                <Works active={this.state.worksActive} />
                <Resume active={this.state.resumeActive} />
                <Contact active={this.state.contactActive} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
