import React from "react";
import { useLocation } from "react-router";

import "./style.css";

function DashboardHeader() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div className="__dashboardHeader">
      {`${
        splitLocation[1].charAt(0).toUpperCase() + splitLocation[1].slice(1)
      } `}
      {splitLocation[2] === undefined
        ? ""
        : splitLocation[2].charAt(0).toUpperCase() + splitLocation[2].slice(1)}
    </div>
  );
}

export default DashboardHeader;
