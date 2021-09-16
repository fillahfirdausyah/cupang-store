import React from "react";

import Navbar from "../../Component/Navbar";
import Jumbotron from "../../Component/Jumbotron";
import Footer from "../../Component/Footer";

import "./style.css";

function HomePage() {
  return (
    <div className="__homePage">
      <Navbar />
      <Jumbotron />
      <Footer />
    </div>
  );
}

export default HomePage;
