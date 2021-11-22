import React from "react";
import { Carousel } from "react-bootstrap";

import "./style.css";

function Jumbotron() {
  return (
    <div className="__jumbotron">
      <div
        className="__carouselWrapper"
        data-aos="zoom-in"
        data-aos-duration="900" 
      >
        <Carousel
          indicators={true}
          nextLabel=""
          prevLabel=""
          interval={3000}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://dummyimage.com/900x250/000/fff"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://dummyimage.com/900x250/000/fff"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://dummyimage.com/900x250/000/fff"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Jumbotron;
