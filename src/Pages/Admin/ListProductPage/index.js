import React, { useState, useEffect } from "react";
import api from "../../../Helpers/api-endpoint";

import {
  Modal,
  Button,
  Dropdown,
  DropdownButton,
  Spinner,
} from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { DashboardHeader, DashboardNav } from "../../../Component";
import "./style.css";

function ListProductPage() {
  const [showModal, setShowModal] = useState(false);
  const [showModalProduct, setShowModalProduct] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [dataCategory, setDataCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [productImage, setProductImage] = useState(null);
  const [availability, setAvailability] = useState(0);
  const [bestSelling, setBestSelling] = useState(0);
  const [product, setProduct] = useState([]);
  const [productPreview, setProductPreview] = useState({});
  const [searchProduct, setSearchProduct] = useState("");
  const [productData, setProductData] = useState({
    title: "",
    material: "",
    color: "",
    size: "",
    additional: "",
  });

  useEffect(() => {
    api.get("/api/category").then((res) => setDataCategory(res.data));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        let data = await api.get("/api/product");
        setIsLoading(false);
        setProduct(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [reload]);

  // Hanlde search
  useEffect(() => {
    const fetchData = async () => {
      if (searchProduct.length > 0) {
        setIsLoading(true);
        let theData = await api.post("/api/search", {
          title: searchProduct,
        });
        setProduct(theData.data);
        setIsLoading(false);
      } else {
        api.get("/api/product").then((res) => setProduct(res.data));
      }
    };
    fetchData();
  }, [searchProduct]);

  // Handle change input value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  // Handle Select
  const selectCategoryId = (e) => {
    const { value } = e.target;
    setCategoryId(value);
  };

  // Image Handler
  const handleProductImage = (e) => {
    setProductImage(e.target.files[0]);
  };

  // Add Product
  const addProduct = (e) => {
    e.preventDefault();
    let newProductData = new FormData();
    newProductData.append("title", productData.title);
    newProductData.append("material", productData.material);
    newProductData.append("color", productData.color);
    newProductData.append("size", productData.size);
    newProductData.append("additional", productData.additional);
    newProductData.append("image", productImage);
    newProductData.append("category_id", categoryId);

    api
      .post("/api/product", newProductData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    e.target.reset();
    setProductData({
      title: "",
      material: "",
      color: "",
      size: "",
      additional: "",
    });
    setShowModal(false);
    setReload(!reload);
  };

  // Filter product by category
  const filterByCategory = (category) => {
    if (category === "semua") {
      setIsLoading(true);
      api.get("/api/product").then((res) => setProduct(res.data));
      setIsLoading(false);
    } else {
      setIsLoading(true);
      api
        .post("/api/search", {
          category,
        })
        .then((res) => setProduct(res.data));
      setIsLoading(false);
    }
  };

  // Preview Product
  const previewProduct = async (id) => {
    try {
      setShowModalProduct(!showModalProduct);
      let theData = await api.get(`/api/product/${id}`);
      let newDescription = JSON.parse(theData.data.description);
      let newData = {
        ...theData.data,
        newDescription,
      };
      setProductPreview(newData);
    } catch (err) {
      console.log(err);
    }
  };

  // Edit Product
  const editProduct = async (id) => {
    try {
      setShowModalProduct(!showModalProduct);
      setShowModalEdit(!showModalEdit);
      let theData = await api.get(`/api/product/${id}`);
      let newDescription = await JSON.parse(theData.data.description);
      setProductData({
        title: theData.data.title,
        material: newDescription.material,
        color: newDescription.color,
        size: newDescription.size,
        additional: newDescription.additional,
        id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Ppdate Product
  const updateProduct = (e) => {
    e.preventDefault();

    let newProductData = new URLSearchParams();
    newProductData.append("title", productData.title);
    newProductData.append("material", productData.material);
    newProductData.append("color", productData.color);
    newProductData.append("size", productData.size);
    newProductData.append("additional", productData.additional);
    newProductData.append("image", productImage);
    newProductData.append("category_id", categoryId);
    newProductData.append("availability", availability);
    newProductData.append("best_selling", bestSelling);

    // console.log(availability);

    api
      .put(`/api/product/${productData.id}`, newProductData, {
        headers: { "content-type": "application/x-www-form-urlencoded" },
      })
      .then((res) => console.log(res.data));
    e.target.reset();
    setProductData({
      title: "",
      material: "",
      color: "",
      size: "",
      additional: "",
    });
  };

  // Delet product
  const deleteProduct = async (id) => {
    try {
      setShowModalProduct(!showModalProduct);
      let status = await api.delete(`api/product/${id}`);
      console.log(status.data);
      setReload(!reload);
    } catch (err) {
      console.log(err);
    }
  };

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
              <input
                autoComplete="off"
                type="text"
                placeholder="Cari Product.."
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
              />
              <SearchIcon />
            </div>
            <div className="__filterProductWrapper">
              <DropdownButton
                id="dropdown-basic-button"
                title="Filter Category"
              >
                <Dropdown.Item onClick={() => filterByCategory("semua")}>
                  Semua
                </Dropdown.Item>
                {dataCategory.map((x) => (
                  <Dropdown.Item
                    key={x.id}
                    onClick={() => filterByCategory(x.category)}
                  >
                    {x.category}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
            <hr />
            {isLoading ? (
              <div className="loadingTheData">
                <Spinner
                  animation="border"
                  className="custom"
                  size="lg"
                  variant="primary"
                />
              </div>
            ) : (
              <div className="row">
                {product.map((x) => (
                  <div
                    className="col-6 col-lg-3"
                    key={x.id}
                    onClick={() => previewProduct(x.id)}
                  >
                    <div className="__listTheProduct">
                      <div className="__productInDashboard">
                        <div className="__productInDashboardImgWrapper">
                          <img
                            src={`http://127.0.0.1:8000/images/${x.image}`}
                            alt=""
                          />
                        </div>
                        <div className="__productInfoTitle">
                          <h3>{x.title}</h3>
                          <p className="category">{x.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={showModal}
        onHide={() => setShowModal(false)}
        dataCategory={dataCategory}
        productData={productData}
        handleChange={handleChange}
        addProduct={addProduct}
        selectCategoryId={selectCategoryId}
        handleProductImage={handleProductImage}
      />

      <ProductPreviewModal
        show={showModalProduct}
        onHide={() => setShowModalProduct(!showModalProduct)}
        data={productPreview}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />

      <EditProductModal
        show={showModalEdit}
        onHide={() => setShowModalEdit(!showModalEdit)}
        dataCategory={dataCategory}
        data={productData}
        handleChange={handleChange}
        updateProduct={updateProduct}
        selectCategoryId={selectCategoryId}
        handleProductImage={handleProductImage}
        setAvailability={setAvailability}
        setBestSelling={setBestSelling}
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
        <form onSubmit={props.addProduct}>
          <div className="mb-3">
            <label htmlFor="namaProduct" className="form-label">
              Nama Product
            </label>
            <input
              autoComplete="off"
              type="text"
              className="form-control"
              id="namaProduct"
              placeholder="Nama Product.."
              value={props.productData.title}
              onChange={props.handleChange}
              name="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Category" className="form-label">
              Category
            </label>
            <select className="form-select" onChange={props.selectCategoryId}>
              <option defaultValue>Pilih Category</option>
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
              autoComplete="off"
              type="text"
              className="form-control"
              id="Material"
              placeholder="Material"
              value={props.productData.material}
              onChange={props.handleChange}
              name="material"
            />
            <div className="form-text">Opsional</div>
          </div>
          <div className="mb-3">
            <label htmlFor="Warna" className="form-label">
              Warna
            </label>
            <input
              autoComplete="off"
              type="text"
              className="form-control"
              id="Warna"
              placeholder="Warna"
              value={props.productData.color}
              onChange={props.handleChange}
              name="color"
            />
            <div className="form-text">Opsional</div>
          </div>
          <div className="mb-3">
            <label htmlFor="Ukuran" className="form-label">
              Ukuran
            </label>
            <input
              autoComplete="off"
              type="text"
              className="form-control"
              id="Ukuran"
              placeholder="Ukuran"
              value={props.productData.size}
              onChange={props.handleChange}
              name="size"
            />
            <div className="form-text">Opsional</div>
          </div>
          <div className="mb-3">
            <label htmlFor="Additional" className="form-label">
              Additional
            </label>
            <input
              autoComplete="off"
              type="text"
              className="form-control"
              id="Additional"
              placeholder="Additional"
              value={props.productData.additional}
              onChange={props.handleChange}
              name="additional"
            />
            <div className="form-text">Opsional</div>
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Gambar
            </label>
            <input
              autoComplete="off"
              className="form-control"
              type="file"
              id="formFile"
              name="image"
              onChange={props.handleProductImage}
            />
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
    <Modal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header className="__modalAddProductHeadFoot" closeButton>
        <Modal.Title>Detail Product</Modal.Title>
      </Modal.Header>
      <Modal.Body className="__modalAddProduct">
        <div className="__detailProductImage">
          <img
            src={`http://127.0.0.1:8000/images/${props.data.image}`}
            alt=""
          />
        </div>
        <hr />
        <div className="__detailProductInfo">
          <table>
            <colgroup>
              <col span="1" style={{ width: "50%" }} />
              <col span="1" style={{ width: "9%" }} />
              <col span="1" style={{ width: "50%" }} />
            </colgroup>
            <tbody>
              <tr>
                <td>Nama Product</td>
                <td>:</td>
                <td>{props.data.title}</td>
              </tr>
              <tr>
                <td>Material</td>
                <td>:</td>
                <td>
                  {props.data.description
                    ? props.data.newDescription.material === null
                      ? "-"
                      : props.data.newDescription.material
                    : ""}
                </td>
              </tr>
              <tr>
                <td>Color</td>
                <td>:</td>
                <td>
                  {props.data.description
                    ? props.data.newDescription.color === null
                      ? "-"
                      : props.data.newDescription.color
                    : ""}
                </td>
              </tr>
              <tr>
                <td>Size</td>
                <td>:</td>
                <td>
                  {props.data.description
                    ? props.data.newDescription.size === null
                      ? "-"
                      : props.data.newDescription.size
                    : ""}
                </td>
              </tr>
              <tr>
                <td>Best Selling</td>
                <td>:</td>
                <td>{props.data.best_selling === 0 ? "Tidak" : "Iya"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <div className="__detailProductAction">
          <button
            className="btn btn-success"
            onClick={() => props.editProduct(props.data.id)}
          >
            <EditIcon />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteProduct(props.data.id)}
          >
            <DeleteForeverIcon />
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer className="__modalAddProductHeadFoot">
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function EditProductModal(props) {
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
          Edit Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="__modalAddProduct __addProduct">
        <form onSubmit={props.updateProduct}>
          <div className="mb-3">
            <label htmlFor="namaProduct" className="form-label">
              Nama Product
            </label>
            <input
              autoComplete="off"
              type="text"
              className="form-control"
              id="namaProduct"
              placeholder="Nama Product.."
              defaultValue={props.data.title}
              onChange={props.handleChange}
              name="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Category" className="form-label">
              Category
            </label>
            <select className="form-select" onChange={props.selectCategoryId}>
              <option defaultValue>Pilih Category</option>
              {props.dataCategory.map((x) => (
                <option value={x.id} key={x.id}>
                  {x.category}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="Category" className="form-label">
              Ketersediaan
            </label>
            <select
              className="form-select"
              onChange={(e) => props.setAvailability(e.target.value)}
            >
              <option value={0}>Pilih Ketersediaan</option>
              <option value={1}>Tersedia</option>
              <option value={0}>Tidak Tersedia</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="Category" className="form-label">
              Best Seller
            </label>
            <select
              className="form-select"
              onChange={(e) => props.setBestSelling(e.target.value)}
            >
              <option value={0}>Pilih Best Seller</option>
              <option value={1}>Iya</option>
              <option value={0}>Tidak</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="Material" className="form-label">
              Material
            </label>
            <input
              autoComplete="off"
              type="text"
              className="form-control"
              id="Material"
              placeholder="Material"
              defaultValue={props.data.material}
              onChange={props.handleChange}
              name="material"
            />
            <div className="form-text">Opsional</div>
          </div>
          <div className="mb-3">
            <label htmlFor="Warna" className="form-label">
              Warna
            </label>
            <input
              autoComplete="off"
              type="text"
              className="form-control"
              id="Warna"
              placeholder="Warna"
              defaultValue={props.data.color}
              onChange={props.handleChange}
              name="color"
            />
            <div className="form-text">Opsional</div>
          </div>
          <div className="mb-3">
            <label htmlFor="Ukuran" className="form-label">
              Ukuran
            </label>
            <input
              autoComplete="off"
              type="text"
              className="form-control"
              id="Ukuran"
              placeholder="Ukuran"
              defaultValue={props.data.size}
              onChange={props.handleChange}
              name="size"
            />
            <div className="form-text">Opsional</div>
          </div>
          <div className="mb-3">
            <label htmlFor="Additional" className="form-label">
              Additional
            </label>
            <input
              autoComplete="off"
              type="text"
              className="form-control"
              id="Additional"
              placeholder="Additional"
              defaultValue={props.data.additional}
              onChange={props.handleChange}
              name="additional"
            />
            <div className="form-text">Opsional</div>
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Gambar
            </label>
            <input
              autoComplete="off"
              className="form-control"
              type="file"
              id="formFile"
              onChange={props.handleProductImage}
              name="image"
            />
          </div>
          <button className="btn btn-primary w-100 mt-3">Simpan</button>
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

export default ListProductPage;
