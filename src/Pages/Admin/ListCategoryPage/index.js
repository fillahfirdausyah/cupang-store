import React from "react";

import { DashboardNav, DashboardHeader } from "../../../Component";
import "./style.css";

function ListCategoryPage() {
  return (
    <div className="__dashboardPage">
      <DashboardHeader />
      <DashboardNav />
      <div className="__listCategoryPage">
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default ListCategoryPage;
