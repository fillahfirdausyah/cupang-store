import React from "react";

import { Navbar, Footer } from "../../Component";

import KlabberLogog from "../../Assets/img/klabber.jpg";
import "./style.css";

function AboutPage() {
  return (
    <div className="__aboutPage">
      <Navbar />
      {/* Main */}
      <div className="container">
        <div className="__aboutUs d-flex align-items-center">
          <div
            className="aboutImg"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <img src={KlabberLogog} alt="" />
          </div>
          <div
            className="aboutCaption mx-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span>Klabber.ID</span>
            <h1>Tentang Kami</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              ullam voluptas adipisci saepe eaque quasi, sit expedita ducimus ut
              tenetur molestias ipsam culpa iste perspiciatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              possimus?
            </p>
          </div>
        </div>
      </div>
      {/* End Main */}
      <Footer />
    </div>
  );
}

export default AboutPage;
