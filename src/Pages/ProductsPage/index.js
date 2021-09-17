import React from "react";

import { Navbar, Footer, ProductCard } from "../../Component";
import dataProduct from "../../dataProduct";

import "./style.css";

function Productpage() {
  return (
    <div className="__productPage">
      <Navbar />
      <div className="container">
        {/* Main */}
        <div className="__product">
          <div className="row">
            {dataProduct.map((data) => (
              <div className="col-lg-3" key={data.id}>
                <ProductCard
                  img={data.img}
                  name={data.name}
                  bestSeller={data.bestSeller}
                />
              </div>
            ))}
          </div>
        </div>
        {/* End Main */}
      </div>
      <Footer />
    </div>
  );
}

export default Productpage;
