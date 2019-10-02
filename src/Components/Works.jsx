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
                <p className="card-text margin-bottom-70">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                <p className="card-text margin-bottom-70">
                  Publicity for a fictional (for now) food delivery service,
                  made with html and css
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
