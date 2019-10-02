import React, { useState } from "react";
import "./menu.css";
class Menu extends React.Component {
  state = {
    aboutActive: true,
    skillsActive: false,
    resumeActive: false,
    worksActive: false,
    contactActive: false
  };

  onAboutClick() {
    this.props.onClick("about");
    this.setState({
      aboutActive: true,
      skillsActive: false,
      resumeActive: false,
      worksActive: false,
      contactActive: false
    });
  }

  onSkillsClick() {
    this.props.onClick("skills");
    this.setState({
      aboutActive: false,
      skillsActive: true,
      resumeActive: false,
      worksActive: false,
      contactActive: false
    });
  }

  onResumeClick() {
    this.props.onClick("resume");
    this.setState({
      aboutActive: false,
      skillsActive: false,
      resumeActive: true,
      worksActive: false,
      contactActive: false
    });
  }

  onWorksClick() {
    this.props.onClick("works");
    this.setState({
      aboutActive: false,
      skillsActive: false,
      resumeActive: false,
      worksActive: true,
      contactActive: false
    });
  }

  onContactClick() {
    this.props.onClick("contact");
    this.setState({
      aboutActive: false,
      skillsActive: false,
      resumeActive: false,
      worksActive: false,
      contactActive: true
    });
  }

  render() {
    return (
      <header className="header">
        <div className="top-menu">
          <ul>
            <li
              className={this.state.aboutActive ? "active" : ""}
              onClick={() => this.onAboutClick()}
            >
              <a href="#about-card">
                <span className="icon fas fa-user"></span>
                <span className="link">About</span>
              </a>
            </li>
            <li
              className={this.state.skillsActive ? "active" : ""}
              onClick={() => this.onSkillsClick()}
            >
              <a href="#skills-card">
                <span className="icon fas fa-star"></span>
                <span className="link">Skills</span>
              </a>
            </li>
            <li
              className={this.state.resumeActive ? "active" : ""}
              onClick={() => this.onResumeClick()}
            >
              <a href="#resume-card">
                <span className="icon fas fa-file-alt"></span>
                <span className="link">Resume</span>
              </a>
            </li>
            <li
              className={this.state.worksActive ? "active" : ""}
              onClick={() => this.onWorksClick()}
            >
              <a href="#works-card">
                <span className="icon fas fa-laptop-code"></span>
                <span className="link">Works</span>
              </a>
            </li>
            <li
              className={this.state.contactActive ? "active" : ""}
              onClick={() => this.onContactClick()}
            >
              <a href="#contact-card">
                <span className="icon fas fa-at"></span>
                <span className="link">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Menu;
