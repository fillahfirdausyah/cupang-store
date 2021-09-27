import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Modal, Button, Toast, ToastContainer } from "react-bootstrap";

import api from "../../../Helpers/api-endpoint";
import { DashboardNav, DashboardHeader } from "../../../Component";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "./style.css";

function ListCategoryPage() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [showToastNotify, setShowToastNotify] = useState(false);
  const [reload, setReload] = useState(false);

  const [categoryName, setCategoryName] = useState("");
  const [categoriesData, setCategoriesData] = useState([]);
  const [resMessage, setResMessage] = useState("");

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
    const fetchData = async () => {
      let categories = await api.get("/api/category");
      setCategoriesData(categories.data);
    };

    fetchData();
  }, [reload]);

  // Add category
  const addCategory = (e) => {
    e.preventDefault();
    api
      .post("/api/category", {
        category: categoryName,
      })
      .then((res) => setResMessage(res.data.success))
      .catch((err) => console.log(err));
    setCategoryName("");
    setShowModal(false);
    setShowToastNotify(true);
    setReload(!reload);
  };

  // Delete Category
  const deleteCategory = (id) => {
    api
      .delete(`/api/category/${id}`)
      .then((res) => setResMessage(res.data.success))
      .catch((err) => console.log(err));
    setShowToastNotify(true);
    setReload(!reload);
  };

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
                    {/* <th scope="col">Jumlah Product</th> */}
                    <th scope="col" style={{ textAlign: "center" }}>
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categoriesData.map((x, index) => (
                    <tr key={x.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{x.category}</td>
                      {/* <td>Otto</td> */}
                      <td className="__actionSection">
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteCategory(x.id)}
                        >
                          <DeleteForeverIcon /> Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ModalAddCategory
              show={showModal}
              onHide={() => setShowModal(false)}
              categoryName={categoryName}
              setCategoryName={setCategoryName}
              addCategory={addCategory}
            />

            <MyToast
              showToastNotify={showToastNotify}
              setShowToastNotify={setShowToastNotify}
              resMessage={resMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MyToast(props) {
  return (
    <ToastContainer position="top-end" className="toast_notify">
      <Toast
        show={props.showToastNotify}
        onClose={() => props.setShowToastNotify(false)}
        bg="success"
        delay={2000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">Notifikasi</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{props.resMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

function ModalAddCategory(props) {
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
          Tambah Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="__modalAddProduct">
        <form onSubmit={props.addCategory}>
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
              autoComplete="off"
              value={props.categoryName}
              onChange={(e) => props.setCategoryName(e.target.value)}
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
