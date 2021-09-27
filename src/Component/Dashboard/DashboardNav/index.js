import React from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";

import DashboardIcon from "@material-ui/icons/Dashboard";
import CategoryIcon from "@material-ui/icons/Category";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LocalMallIcon from "@material-ui/icons/LocalMall";

import "./style.css";

function DashboardNav() {
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    history.push("/home");
  };

  return (
    <div className="__sideNav">
      <div className="container">
        <ul>
          <NavLink to="/dashboard">
            <li className={splitLocation[1] === "dashboard" ? "active" : ""}>
              <DashboardIcon />
            </li>
          </NavLink>
          <NavLink to="/admin/products">
            <li
              className={
                splitLocation[1] === "admin" && splitLocation[2] === "products"
                  ? "active"
                  : ""
              }
            >
              <LocalMallIcon />
            </li>
          </NavLink>
          <NavLink to="/admin/category">
            <li
              className={
                splitLocation[1] === "admin" && splitLocation[2] === "category"
                  ? "active"
                  : ""
              }
            >
              <CategoryIcon />
            </li>
          </NavLink>
          <li onClick={logoutHandler}>
            <ExitToAppIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardNav;
