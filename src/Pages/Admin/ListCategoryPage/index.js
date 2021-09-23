import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { DashboardNav, DashboardHeader } from "../../../Component";
import "./style.css";

function ListCategoryPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="__dashboardPage">
      <DashboardHeader />
      <DashboardNav />
      <div className="__listCategoryPage">
        <div className="container">
          <div className="__listCategoryPageMainWrapper">
            <header>
              <h3>List Category</h3>
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Tambah Category
              </button>
            </header>
            <hr />
            <div className="__listCategoryTable">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Category</th>
                    <th scope="col">Jumlah Product</th>
                    <th scope="col">Aksi</th>
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
                    <td>hallo</td>
                    <td>hallo</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ModalAddCategory
              show={showModal}
              onHide={() => setShowModal(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalAddCategory(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header className="__modalAddProductHeadFoot">
        <Modal.Title id="contained-modal-title-vcenter">
          Tambah Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="__modalAddProduct">
        <form>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Nama Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Nama Category"
              required
            />
          </div>
          <button className="btn btn-primary w-100">Tambah</button>
        </form>
      </Modal.Body>
      <Modal.Footer className="__modalAddProductHeadFoot">
        <Button onClick={props.onHide} className="btn btn-danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ListCategoryPage;
