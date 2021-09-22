import React from "react";

import { DashboardHeader, DashboardNav } from "../../../Component";
import "./style.css";

function ListProductPage() {
  return (
    <div className="__dashboardPage">
      <DashboardHeader />
      <DashboardNav />
      <div className="__listProductPage">
        <h1>List Product</h1>
      </div>
    </div>
  );
}

export default ListProductPage;
