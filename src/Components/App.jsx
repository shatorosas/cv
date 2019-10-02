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
      <div className="row justify-content-center align-items-center app__main">
        <Container className="app__container" as="div">
          <Row className="justify-content-center align-items-center">
            <Col md={12} lg={1}>
              <div className="app__menu-container">
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
              </div>
            </Col>
            <Col md={12} lg={5} className="no-left-padding no-right-padding">
              <div id="about-card" className="app__anchor">
                <Profile />
              </div>
            </Col>
            <Col
              md={12}
              lg={6}
              className="no-left-padding no-right-padding app__cards-container"
            >
              <div>
                <About active={this.state.aboutActive} />
                <div id="skills-card" className="app__anchor">
                  <Skills active={this.state.skillsActive} />
                </div>
                <div id="resume-card" className="app__anchor">
                  <Resume active={this.state.resumeActive} />
                </div>
                <div id="works-card" className="app__anchor">
                  <Works active={this.state.worksActive} />
                </div>
                <div id="contact-card" className="app__anchor">
                  <Contact active={this.state.contactActive} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
