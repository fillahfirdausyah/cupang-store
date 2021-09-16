import React from "react";

import Navbar from "../../Component/Navbar";
import Jumbotron from "../../Component/Jumbotron";

import "./style.css";

function HomePage() {
  return (
    <div className="__homePage">
      <Navbar />
      <Jumbotron />
    </div>
  );
}

export default HomePage;
