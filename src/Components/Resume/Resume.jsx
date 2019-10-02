import React from "react";
import "./resume.css";
import employers from "./employers";
import schools from "./schools";
import certifications from "./certifications";
import { Row, Col, Accordion } from "react-bootstrap";

class Resume extends React.Component {
  state = {
    activeKeys: ["0"]
  };

  renderProjects(projects) {
    return projects.map(project => {
      return (
        <li key={project.endDate}>
          <div>
            <div className="info">
              <span className="resume__project">{project.name}</span>
              <span className="resume__tech-used">{project.technologies}</span>
              <span className="resume__summary">{project.summary}</span>
              <span className="resume__roles">{project.roles}</span>
            </div>
          </div>
          <span className="number">
            <span>{project.endDate}</span> <span>{project.startDate}</span>
          </span>
        </li>
      );
    });
  }

  renderSchools() {
    return schools.map(school => {
      return (
        <li key={school.endDate}>
          <div>
            <div className="info">
              <span className="resume__project">{school.degree}</span>
              <span className="resume__tech-used">{school.school}</span>
              <span className="resume__summary">{school.name}</span>
            </div>
          </div>
          <span className="number">
            <span>{school.endDate}</span> <span>{school.startDate}</span>
          </span>
        </li>
      );
    });
  }

  renderCertifications(certifications) {
    return certifications.map(certification => {
      return (
        <li key={certification.certificationNumber}>
          <div className="row" style={{ marginBottom: "15px" }}>
            <div className="col-2 offset-1">
              <span className="resume__cert-year">{certification.year}</span>
            </div>
            <div className="col">
              <span className="resume__project">{certification.name}</span>
              <br />
              <span className="resume__tech-used">
                {certification.subTitle}
              </span>
              <br />
              <span className="resume__roles">
                {certification.certificationNumber}
              </span>
            </div>
          </div>
        </li>
      );
    });
  }

  renderCertUnits() {
    return certifications.map(unit => {
      return (
        <div key={unit.trainscript} style={{ maxWidth: "94%" }}>
          <div className="resume__cert-unit">
            <h4 className="resume__units">{unit.certifyingUnit}</h4>
            <a
              href={unit.url}
              target="_blank"
              className="resume__transcript-lnk"
            >
              Transcript
            </a>
            <div
              className="row justify-content-between"
              style={{ marginRight: "0px" }}
            >
              <div className="col">
                <span className="resume__roles">Trainscript id: 974007</span>
              </div>
              <div className="col">
                <span className="resume__roles">Access code: 81081281</span>
              </div>
            </div>
          </div>
          <ul className="resume__cert">
            {this.renderCertifications(unit.certifications)}
          </ul>
        </div>
      );
    });
  }

  renderEmployers() {
    return employers.map(employer => {
      return (
        <Accordion
          defaultActiveKey={this.state.activeKeys[0]}
          key={employer.id}
        >
          <Accordion.Toggle
            eventKey={employer.id}
            as="div"
            className="card-header"
            style={{ marginRight: "1px" }}
            onClick={() => {
              if (this.state.activeKeys.includes(employer.id)) {
                this.setState({
                  activeKeys: this.state.activeKeys.filter(
                    key => key != employer.id
                  )
                });
              } else {
                this.setState({
                  ...this.state,
                  activeKeys: [...this.state.activeKeys, employer.id]
                });
              }
            }}
          >
            <div className="row justify-content-between align-items-center">
              <div className="col" style={{ fontWeight: "700" }}>
                {employer.employer}
              </div>
              <div className="col ">
                <div className="row justify-content-end">
                  <span
                    className={
                      "fas " +
                      (this.state.activeKeys.includes(employer.id)
                        ? "fa-caret-up"
                        : "fa-caret-down")
                    }
                  ></span>
                </div>
              </div>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={employer.id}>
            <ul className="resume">{this.renderProjects(employer.projects)}</ul>
          </Accordion.Collapse>
        </Accordion>
      );
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "4px",
          fontSize: "90%"
        }}
        className={"section resume__section " + (this.props.active ? "slide" : "hide")}
      >
        <div className="resume__container-main">
          <Row style={{marginRight:"0px"}}>
            <Col md={12} lg={12} xl={6} style={{ paddingRight: "5px" }}>
              <div className="resume__container-experience">
                <h3 className="resume__title title">Experience</h3>
                {this.renderEmployers()}
              </div>
            </Col>
            <Col
              md={12}
              lg={12}
              xl={6}
              style={{ paddingLeft: "10px", paddingRight: "0px" }}
            >
              <div className="resume__container-education">
                <h3 className="resume__title title">Certifications</h3>
                {this.renderCertUnits()}
                <h3 className="resume__title title">Education</h3>
                <ul className="resume">{this.renderSchools()}</ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Resume;
