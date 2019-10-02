import React from "react";
import { ProgressBar } from "react-bootstrap";
import skills from "./skills.js";
import "./skills.css";

class Skills extends React.Component {
  renderSkills(skills) {
    return skills.map(skill => {
      return (
        <li className="border-line-h">
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
        <div className="row" style={{ marginLeft: "0px" }}>
          <div className="border-line-v">
            <div className="skills-list">
              <div className="skills__skill-title border-line-h">
                <div className="icon">
                  <i class={type.icon}></i>
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
      <div
        id="#skills-card"
        className={"section " + (this.props.active ? "slide" : "hide")}
      >
        <div className="content skills">
          <div className="title">My Skills</div>
          <div className="skills__main">{this.renderTypes()}</div>
        </div>
      </div>
    );
  }
}

export default Skills;
