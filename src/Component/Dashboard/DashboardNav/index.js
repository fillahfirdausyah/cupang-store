import React from "react";

import DashboardIcon from "@material-ui/icons/Dashboard";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CategoryIcon from "@material-ui/icons/Category";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./style.css";

function DashboardNav() {
  return (
    <div className="__sideNav">
      <div className="container">
        <ul>
          <li>
            <DashboardIcon />
          </li>
          <li>
            <AddBoxIcon />
          </li>
          <li>
            <CategoryIcon />
          </li>
          <li>
            <ExitToAppIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardNav;
