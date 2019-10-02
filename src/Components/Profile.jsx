import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile__container">
      <div className="profile__card">
        <div className="profile__profile">
          <div className="profile__background"></div>
          <div className="profile__image">
            <img src="/images/profile.png" alt="Gabriel Rosas" />
          </div>
          <div className="profile__title">Gabriel Rosas</div>
          <div className="profile__subtitle">Software Developer</div>
          <div className="social">
            <a
              target="_blank"
              href="https://github.com/shatorosas/cv"
              rel="noopener noreferrer"
            >
              <span className="fab fa-github"></span>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gabriel-rosas/"
              rel="noopener noreferrer"
            >
              <span className="fab fa-linkedin"></span>
            </a>
            <a
              target="_blank"
              href="mailto:gabo.roses@gmail.com"
              rel="noopener noreferrer"
            >
              <span className="fas fa-envelope"></span>
            </a>
            <a
              href="tel:+526531191477"
              target="_blank"
              className="about__lnk"
              rel="noopener noreferrer"
            >
              <span className="fas fa-phone-square-alt"></span>
            </a>
          </div>
        </div>
        <div className="lnks">
          <a href="CV_English.pdf" className="lnk" target="_blank">
            <span className="text">Download CV</span>
            <span className="fas fa-download"></span>
          </a>
          <a
            href="#contact-card"
            className="lnk discover"
            onClick={() => {
              if (window.innerWidth >= 992)
                window.open("mailto:gabo.roses@gmail.com");
            }}
          >
            <span className="text">Contact Me</span>
            <span className="fas fa-envelope-open-text"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
