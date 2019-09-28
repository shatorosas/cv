import React from "react";
import "./menu.css";
const Menu = () => {
  return (
    <header className="header">
      <div className="top-menu">
        <ul>
          <li className="active">
            <a href="#about-card">
              <span className="icon fas fa-user"></span>
              <span className="link">About</span>
            </a>
          </li>
          <li className="">
            <a href="#resume-card">
              <span className="icon fas fa-file-alt"></span>
              <span className="link">Resume</span>
            </a>
          </li>
          <li className="">
            <a href="#works-card">
              <span className="icon fas fa-laptop-code"></span>
              <span className="link">Works</span>
            </a>
          </li>
          <li className="">
            <a href="#contacts-card">
              <span className="icon fas fa-at"></span>
              <span className="link">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
