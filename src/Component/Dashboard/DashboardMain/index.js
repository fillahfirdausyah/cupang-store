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
      <div className="__listProductDashboard">
        <h1>List Product</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardMain;
