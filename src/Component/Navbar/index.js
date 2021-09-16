import React, { useState } from "react";
import { Link } from "react-router-dom";

import KlabberLogo from "../../Assets/img/klabber.jpg";

import "./style.css";

function Navbar() {
  const [isNavCollapse, setIsNavCollapse] = useState(true);

  const handleNavCollapse = () => setIsNavCollapse(!isNavCollapse);

  return (
    <div className="__navbar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand d-flex align-items-center" to="/">
            <img
              src={KlabberLogo}
              class="d-inline-block align-text-top __navbarImg"
            />
            Klabber ID
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={!isNavCollapse ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class={`${isNavCollapse ? "collapse" : ""} navbar-collapse`}
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav ms-auto">
              <Link class="nav-link active" to="/">
                Home
              </Link>
              <Link class="nav-link" to="/products">
                Products
              </Link>
              <Link class="nav-link" to="/about">
                About
              </Link>
              <Link class="nav-link" to="/faq">
                FaQ
              </Link>
              <Link class="nav-link" to="/how-to-order">
                How To Order
              </Link>
              <Link class="nav-link" to="/blog">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
