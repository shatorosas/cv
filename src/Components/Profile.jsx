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
          <div className="title">Gabriel Rosas</div>
          <div className="subtitle">Software Developer</div>
          <div className="social">
            <a
              target="_blank"
              href="https://github.com/"
              rel="noopener noreferrer"
            >
              <span className="fab fa-github"></span>
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/"
              rel="noopener noreferrer"
            >
              <span className="fab fa-linkedin"></span>
            </a>
          </div>
        </div>
        <div className="lnks">
          <a href="#" className="lnk">
            <span className="text">Download CV</span>
            <span className="fas fa-download"></span>
          </a>
          <a href="#" className="lnk discover">
            <span className="text">Contact Me</span>
            <span className="fas fa-envelope-open-text"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
