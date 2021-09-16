import React from "react";

import { Navbar, Jumbotron, Footer } from "../../Component";

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
