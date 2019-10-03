import React from "react";
import "./works.css";

const Works = props => {
  return (
    <div className={"section  " + (props.active ? "slide" : "hide")}>
      <div className="works__section">
        <div className="title">Recent works</div>
        <div className="works__main row align-items-center">
          <div className="card-group ">
            <div className="card">
              <img
                className="card-img-top"
                src="/images/rsvp.png"
                alt="RSVP'er"
              />
              <div className="card-body">
                <h5 className="card-title">RSVP'er</h5>
                <p className="card-text works__card-text">
                  RSVP sending app made with <strong>React</strong>,{" "}
                  <strong>Materializecss</strong> and{" "}
                  <strong>google oauth</strong> for the front end,{" "}
                  <strong>stripe</strong> for in-app payments, and a backend web
                  api made with <strong>node.js</strong> and{" "}
                  <strong>mongoose</strong>.
                </p>
                <div className="works__lnks">
                  <a
                    href="https://simplersvp.herokuapp.com/"
                    className="lnk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text">visit</span>
                    <span className="btn-icon fas fa-globe"></span>
                  </a>
                  <a
                    href="https://github.com/shatorosas/RSVP"
                    className="lnk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text">Github</span>
                    <span className="btn-icon fab fa-github"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="/images/ShatosKitchen.png"
                alt="Shatos Kitchen"
              />
              <div className="card-body">
                <h5 className="card-title">Shato's kitchen</h5>
                <p className="card-text works__card-text">
                  Publicity for a fictional (for now) food delivery service,
                  made with <strong>html</strong> and <strong>css</strong>.
                </p>
                <div className="works__lnks">
                  <a
                    href="https://shatoskitchen.herokuapp.com/"
                    className="lnk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text">visit</span>
                    <span className="btn-icon fas fa-globe"></span>
                  </a>
                  <a
                    href="https://github.com/shatorosas/ShatosKitchen"
                    target="_blank"
                    className="lnk"
                    rel="noopener noreferrer"
                  >
                    <span className="text">Github</span>
                    <span className="btn-icon fab fa-github"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
