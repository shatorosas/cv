import React from "react";
import { ProgressBar } from "react-bootstrap";
import skills from "./skills.js";
import "./skills.css";

class Skills extends React.Component {
  renderSkills(skills) {
    return skills.map(skill => {
      return (
        <li key={skill.name} className="border-line-h">
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="skills__skill-name">{skill.name}</div>
              <span
                className={
                  skill.years
                    ? "skills__experience"
                    : skill.months
                    ? "skills__experience"
                    : ""
                }
              >
                {skill.years
                  ? skill.years + " years"
                  : skill.months
                  ? skill.months + " months"
                  : ""}
              </span>
            </div>
            <ProgressBar animated now={skill.expertise} />
          </div>
        </li>
      );
    });
  }

  renderTypes() {
    return skills.map(type => {
      return (
        <div key={type.type} className="row" style={{ marginLeft: "0px" }}>
          <div className="border-line-v" style={{ width: "100%" }}>
            <div className="skills-list">
              <div className="skills__skill-title border-line-h">
                <div className="icon">
                  <i className={type.icon}></i>
                </div>
                <div className="skills__skill-name">{type.type}</div>
              </div>
              <ul className="skills_skill-container">
                {this.renderSkills(type.skills)}
              </ul>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={"section " + (this.props.active ? "slide" : "hide")}>
        <div className="content skills">
          <div className="title">My Skills</div>
          <div className="skills__main">{this.renderTypes()}</div>
        </div>
      </div>
    );
  }
}

export default Skills;
