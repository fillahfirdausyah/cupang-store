import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

import { Navbar, Footer } from "../../Component/index";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./style.css";

function FaqPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="__faqPage">
      <Navbar />
      {/* Main */}
      <div className="container">
        <div className="__faqTitleSection">
          <h2>Frequently Asked Questions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum
            autem delectus, reprehenderit possimus quis ab ea sunt odio
            repellendus quia atque! Quo, nesciunt quaerat!
          </p>
        </div>
        <hr />
        <div className="__faqBodySection">
          <div className="__cardPertanyaan" onClick={() => setOpen(!open)}>
            <header className={open ? "open" : ""}>
              <div className="__pertanyaan">Pertanyaan 1</div>
              <div className="btn-collapsed">
                {open ? <KeyboardArrowDownIcon /> : <ExpandLessIcon />}
              </div>
            </header>
            <Collapse in={open}>
              <div className="__cardPertanyaanBody">
                <div className="__cardPertanyaanBodyText">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                  nesciunt quia optio, molestias mollitia praesentium modi
                  minima quo enim impedit neque et nisi dolorum repellat
                  corporis magni?
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
      {/* End Main */}

      <Footer />
    </div>
  );
}

export default FaqPage;
