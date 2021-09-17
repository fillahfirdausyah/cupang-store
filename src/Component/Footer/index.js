import React from "react";
import { Container } from "react-bootstrap";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TokopediaIcon from "../../Assets/img/tokopedia.svg";

import KlabberLogo from "../../Assets/img/klabber.jpg";
import "./style.css";

function Footer() {
  return (
    <div className="__footer">
      <Container>
        <div className="row">
          <div className="col-md-3 octa-footer">
            <div className="section1 d-flex align-items-center">
              <img src={KlabberLogo} alt="" className="img-fluid" />
              <div className="infoWrapper">
                <h3>Klabber.ID</h3>
                <div className="sosmed d-flex justify-content-between">
                  <InstagramIcon fontSize="small" />
                  <FacebookIcon fontSize="small" />
                  <img src={TokopediaIcon} alt="" />
                </div>
              </div>
            </div>
            <p>Klabber.ID</p>
            <p className="year">© 2019-2021</p>
          </div>
          <div className="col-md-3 col-6 mt-5">
            <h1>Syarat & Kebijakan</h1>
            <li>Syarat Layanan</li>
            <li>Kebijakan Pembayaran</li>
            <li>Kebijakan Privasi</li>
            <li>Kebijakan Pengiriman</li>
          </div>
          <div className="col-md-3 col-6 mt-5">
            <h1>Produksi</h1>
            <li>Tentang</li>
            <li>Time Line Kami</li>
            <li>Kontak</li>
          </div>
          <div className="col-md-3 col-12 mt-5">
            <h1>Kantor</h1>
            <li>Klabber.ID</li>
            <li>Jl. Menuju Surga, Dunia, No.1</li>
            <li>Jawa, Indonesia</li>
            <li>team@klabber.id</li>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
