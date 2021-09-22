import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import SearchIcon from "@material-ui/icons/Search";
import { DashboardHeader, DashboardNav } from "../../../Component";
import "./style.css";

function ListProductPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="__dashboardPage">
      <DashboardHeader />
      <DashboardNav />
      <div className="__listProductPage">
        <div className="container">
          <div className="__listProductPageMainWrapper">
            <header>
              <h3>List Product</h3>
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Tambah Product
              </button>
            </header>
            <div className="__searchProductWrapper">
              <input type="text" placeholder="Cari Product.." />
              <SearchIcon />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="__modalAddProductHeadFoot">
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="__modalAddProduct">
        <h4>Centered Modal</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          eius dolor quam distinctio inventore, beatae temporibus assumenda
          perferendis repellat dolore nihil! Eaque repellendus harum corrupti
          voluptate facere quidem optio voluptas deleniti quam accusamus ad et,
          illo in laboriosam! Ut, inventore! Mollitia eligendi ipsa eos
          cupiditate inventore tenetur, consectetur exercitationem quibusdam.
        </p>
      </Modal.Body>
      <Modal.Footer className="__modalAddProductHeadFoot">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ListProductPage;
