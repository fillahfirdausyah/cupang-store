import React from "react";
// import ApiBaseURL from "../../Helpers/apiBaseUrl";
import CheckIcon from "@material-ui/icons/Check";

import "./style.css";

function ProductCard({ img, name, bestSeller }) {
  return (
    <div className="__productCard" data-aos="fade-up" data-aos-duration="700">
      <div className="__productCardBody">
        <img src={`${img}`} alt="" />
      </div>
      <div className="__productCardInfo">
        <div className="title">
          <p>{name}</p>
        </div>
        <div className="price">
          <p>Rp 100.000 <span>Rp.150.000</span></p>
          <div className="available">
            <CheckIcon  />
            Tersedia
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
