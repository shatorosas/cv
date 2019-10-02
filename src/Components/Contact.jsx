import React from "react";
import "./contact.css";

const Contact = props => {
  return (
    <div className={"section " + (props.active ? "slide" : "hide")}>
      <div className="">
        <div className="">
          <div className="title">Contact</div>

          <div className="row contact__content">
            <div className="col-12 border-line-v">
              <div className="contact__info-list">
                <ul>
                  <li>
                    <i class="fas fa-home"></i> Mexicali, B.C.
                  </li>
                  <li>
                    <i class="fas fa-phone-square-alt"></i> +52(653)119-1477
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i> gabo.roses@gmail.com
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
