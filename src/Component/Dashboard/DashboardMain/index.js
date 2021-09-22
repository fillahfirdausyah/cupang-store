import React from "react";

import CategoryIcon from "@material-ui/icons/Category";
import LocalMallIcon from "@material-ui/icons/LocalMall";

import "./style.css";

function DashboardMain() {
  return (
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
  );
}

export default DashboardMain;
