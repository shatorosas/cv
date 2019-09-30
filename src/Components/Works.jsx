import React from "react";
import { Carousel } from "react-bootstrap";

const Works = props => {
  return (
    <div className={"works__main " + props.className}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/rsvp.png" alt="RSVP'er" />
          <Carousel.Caption>
            <h3>RSVP'er</h3>
            <p>Send RSVPs to anyone!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/ShatosKitchen.png"
            alt="Shatos Kitchen"
          />

          <Carousel.Caption>
            <h3>Shato's Kitchen</h3>
            <p>Hungry?</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Works;
