import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import api from "../../../Helpers/api-endpoint";

import CategoryIcon from "@material-ui/icons/Category";
import LocalMallIcon from "@material-ui/icons/LocalMall";

import "./style.css";

function DashboardMain() {
  const history = useHistory();
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalCategory, setTotalCategory] = useState(0);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const verifyToken = async () => {
      let token = localStorage.getItem("token");
      try {
        await api.get(`/api/auth/verify-token`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (err) {
        localStorage.removeItem("token");
        history.push("/login");
      }
    };

    verifyToken();
  }, []);

  useEffect(() => {
    const fetchTotalProduct = async () => {
      let product = await api.get("api/product");
      setProduct(product.data);
      setTotalProduct(product.data.length);
    };

    const fetchTotalCategory = async () => {
      let category = await api.get("/api/category");
      setTotalCategory(category.data.length);
    };

    fetchTotalProduct();
    fetchTotalCategory();
  }, []);

  return (
    <div className="__mainDashboard">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="__cardInfo __cardInfo-primary">
            <div className="__cardInfoLeft">
              <h4>Total Product</h4>
              <span>{totalProduct}</span>
            </div>
            <div className="__cardInfoRight">
              <LocalMallIcon />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="__cardInfo __cardInfo-secondary">
            <div className="__cardInfoLeft">
              <h4>Total Category</h4>
              <span>{totalCategory}</span>
            </div>
            <div className="__cardInfoRight">
              <CategoryIcon />
            </div>
          </div>
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
            </tr>
          </thead>
          <tbody>
            {product.map((x, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{x.title}</td>
                <td>{x.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardMain;
