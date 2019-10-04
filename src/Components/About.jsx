import React from "react";
import "./about.css";

const About = props => {
  return (
    <div className={"section " + (props.active ? "slide" : "hide")}>
      <div className="about__section">
        <div className="">
          <div className="title">About Me</div>

          <div className="row about__content">
            <div className="col-12 border-line-v">
              <div className="">
                <p>
                  Energetic software engineer with passion for developing
                  innovative programs that expedite the efficiency and
                  effectiveness of organizational success. Well-versed in
                  technology and writing code to create systems that are
                  reliable and user-friendly. Skilled leader who has the proven
                  ability to educate, and manage a team of professionals to
                  build software programs and effectively track changes.
                  Strategic thinker, and innovative creator to develop software
                  that is customized to meet a company’s organizational needs,
                  highlight their core competencies, and further their success.
                </p>
              </div>
              <div className="about__info-list">
                <ul>
                  <li>
                    <a
                      href="https://calendar.google.com/calendar/r/month/1981/12/8?pli=1"
                      target="_blank"
                      className="about__lnk"
                      rel="noopener noreferrer"
                    >
                      <i className="far fa-calendar-alt"></i> <br />
                      12/08/1981
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/place/Mexicali,+Baja+California/@32.6114112,-115.453447,13z/data=!4m5!3m4!1s0x80d7700ca877ddd3:0xd40033a0e5cdf59a!8m2!3d32.6245389!4d-115.4522623"
                      target="_blank"
                      className="about__lnk"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-home"></i> <br />
                      Mexicali, B.C.
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+526531191477"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="about__lnk"
                    >
                      <i className="fas fa-phone-square-alt"></i>
                      <br />
                      +52(653)119-1477
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:gabo.roses@gmail.com"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="about__lnk"
                    >
                      <i className="fas fa-envelope"></i> <br />
                      gabo.roses@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
