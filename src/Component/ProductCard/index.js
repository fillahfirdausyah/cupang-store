import React from "react";

import "./style.css";

function ProductCard({ img, name, bestSeller }) {
  return (
    <div className="__productCard" data-aos="fade-up" data-aos-duration="700">
      <div
        className={
          bestSeller
            ? "__productCardBestSeller"
            : "__productCardBestSeller hidden"
        }
      >
        <span>Best Seller</span>
      </div>
      <div className="__productCardBody">
        <img src={`http://127.0.0.1:8000/images/${img}`} alt="" />
      </div>
      <div className="__productCardRibbon">
        <span>{name}</span>
      </div>
    </div>
  );
}

export default ProductCard;
