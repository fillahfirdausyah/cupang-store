import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import KlabberLogo from "../../Assets/img/klabber.jpg";

import "./style.css";

function Navbar() {
  const [isNavCollapse, setIsNavCollapse] = useState(true);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const handleNavCollapse = () => setIsNavCollapse(!isNavCollapse);

  return (
    <div className="__navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={KlabberLogo}
              className="d-inline-block align-text-top __navbarImg"
              alt=""
            />
            Klabber ID
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={!isNavCollapse ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapse ? "collapse" : ""} navbar-collapse`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ms-auto">
              <NavLink
                className={
                  splitLocation[1] === "home" ? "nav-link active" : "nav-link"
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={
                  splitLocation[1] === "products"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
                className={
                  splitLocation[1] === "about" ? "nav-link active" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={
                  splitLocation[1] === "faq" ? "nav-link active" : "nav-link"
                }
                to="/faq"
              >
                FaQ
              </NavLink>
              <NavLink
                className={
                  splitLocation[1] === "how-to-order"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/how-to-order"
              >
                How To Order
              </NavLink>
              <NavLink
                className={
                  splitLocation[1] === "blog" ? "nav-link active" : "nav-link"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
