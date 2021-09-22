import React from "react";

import DashboardIcon from "@material-ui/icons/Dashboard";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CategoryIcon from "@material-ui/icons/Category";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LocalMallIcon from "@material-ui/icons/LocalMall";

import "./style.css";

function DashboardPage() {
  return (
    <div className="__dashboardPage">
      <div className="__dashboardHeader">Dashboard</div>
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
      <div className="__mainDashboard">
        <div className="__cardInfo __cardInfo-primary">
          <div className="__cardInfoLeft">
            <h4>Total Product</h4>
            <span>1</span>
          </div>
          <div className="__cardInfoRight">
            <LocalMallIcon />
          </div>
        </div>
        <div className="__cardInfo __cardInfo-secondary">
          <div className="__cardInfoLeft">
            <h4>Total Category</h4>
            <span>5</span>
          </div>
          <div className="__cardInfoRight">
            <CategoryIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
