import React from "react";

import { Navbar, Footer, ProductCard } from "../../Component";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import dataProduct from "../../dataProduct";

import "./style.css";

function Productpage() {
  return (
    <div className="__productPage">
      <Navbar />
      <div className="container">
        {/* Main */}
        <div className="__product">
          <div className="row col-product">
            {dataProduct.map((data) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={data.id}>
                <ProductCard
                  img={data.img}
                  name={data.name}
                  bestSeller={data.bestSeller}
                />
              </div>
            ))}
          </div>
          <div className="__productCategory">
            <h1>Categories</h1>
            <div className="__listProductCategory">
              <ul>
                <li>
                  <ArrowForwardIosIcon className="arrowIcon" />
                  Tas
                </li>
                <li>
                  <ArrowForwardIosIcon className="arrowIcon" />
                  Shirt
                </li>
                <li>
                  <ArrowForwardIosIcon className="arrowIcon" />
                  Jacket
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Main */}
      </div>
      <Footer />
    </div>
  );
}

export default Productpage;
