import React, { useState, useEffect } from "react";
import api from "../../../Helpers/api-endpoint";

import { Modal, Button, Dropdown, DropdownButton } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import { DashboardHeader, DashboardNav } from "../../../Component";
import "./style.css";

import dataProduct from "../../../dataProduct";

function ListProductPage() {
  const [showModal, setShowModal] = useState(false);
  const [showModalProduct, setShowModalProduct] = useState(false);

  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    api.get("/api/category").then((res) => setDataCategory(res.data));
  }, []);

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
            <div className="__filterProductWrapper">
              <DropdownButton
                id="dropdown-basic-button"
                title="Filter Category"
              >
                {dataCategory.map((x) => (
                  <Dropdown.Item key={x.id}>{x.category}</Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
            <hr />
            <div className="row">
              {dataProduct.map((x) => (
                <div
                  className="col-6 col-lg-3"
                  key={x.id}
                  onClick={() => setShowModalProduct(!showModalProduct)}
                >
                  <div className="__listTheProduct">
                    <div className="__productInDashboard">
                      <div className="__productInDashboardImgWrapper">
                        <img src={x.img} alt="" />
                      </div>
                      <div className="__productInfoTitle">
                        <h3>{x.name}</h3>
                        <p className="category">Tas</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={showModal}
        onHide={() => setShowModal(false)}
        dataCategory={dataCategory}
      />

      <ProductPreviewModal
        show={showModalProduct}
        onHide={() => setShowModalProduct(!showModalProduct)}
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header className="__modalAddProductHeadFoot" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tambah Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="__modalAddProduct __addProduct">
        <form>
          <div className="mb-3">
            <label htmlFor="namaProduct" className="form-label">
              Nama Product
            </label>
            <input
              type="text"
              className="form-control"
              id="namaProduct"
              placeholder="Nama Product.."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Category" className="form-label">
              Category
            </label>
            <select className="form-select">
              {props.dataCategory.map((x) => (
                <option value={x.id} key={x.id}>
                  {x.category}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="Material" className="form-label">
              Material
            </label>
            <input
              type="text"
              className="form-control"
              id="Material"
              placeholder="Material"
            />
            <div className="form-text">Opsional</div>
          </div>
          <div className="mb-3">
            <label htmlFor="Warna" className="form-label">
              Warna
            </label>
            <input
              type="text"
              className="form-control"
              id="Warna"
              placeholder="Warna"
            />
            <div className="form-text">Opsional</div>
          </div>
          <div className="mb-3">
            <label htmlFor="Ukuran" className="form-label">
              Ukuran
            </label>
            <input
              type="text"
              className="form-control"
              id="Ukuran"
              placeholder="Ukuran"
            />
            <div className="form-text">Opsional</div>
          </div>
          <div className="mb-3">
            <label htmlFor="Additional" className="form-label">
              Additional
            </label>
            <input
              type="text"
              className="form-control"
              id="Additional"
              placeholder="Additional"
            />
            <div className="form-text">Opsional</div>
          </div>
          <div className="mb-3">
            <label for="formFile" className="form-label">
              Gambar
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <button className="btn btn-primary w-100 mt-3">Tambah</button>
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

function ProductPreviewModal(props) {
  return (
    <Modal {...props} backdrop="static" keyboard={false} centered>
      <Modal.Header className="__modalAddProductHeadFoot" closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body className="__modalAddProduct">
        I will not close if you click outside me. Don't even try to press escape
        key.
      </Modal.Body>
      <Modal.Footer className="__modalAddProductHeadFoot">
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ListProductPage;
