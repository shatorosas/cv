import React from "react";
import "./contact.css";

const Contact = props => {
  return (
    <div className={"section " + (props.active ? "slide" : "hide")}>
      <div className="contact__section">
        <div className="">
          <div className="title">Contact</div>

          <div className="row contact__content">
            <div className="col-12 border-line-v">
              <div className="contact__info-list">
                <ul>
                  <li>
                    <a
                      href="https://www.google.com/maps/place/Mexicali,+Baja+California/@32.6474227,-115.3690192,16.25z/data=!4m5!3m4!1s0x80d7700ca877ddd3:0xd40033a0e5cdf59a!8m2!3d32.6245389!4d-115.4522623"
                      target="_blank"
                      className="about__lnk"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-home"></i>
                      <br /> Mexicali, B.C.
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
                      <i className="fas fa-envelope"></i>
                      <br /> gabo.roses@gmail.com
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

export default Contact;
