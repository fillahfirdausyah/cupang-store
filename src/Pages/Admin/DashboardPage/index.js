import React from "react";

import {
  DashboardHeader,
  DashboardMain,
  DashboardNav,
} from "../../../Component";
import "./style.css";

function DashboardPage() {
  return (
    <div className="__dashboardPage">
      <DashboardHeader />
      <DashboardNav />
      <DashboardMain />
    </div>
  );
}

export default DashboardPage;
