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
import { DashboardHeader, DashboardNav } from "../../../Component";
import "./style.css";

function ListProductPage() {
  const [showModal, setShowModal] = useState(false);
  const [showModalProduct, setShowModalProduct] = useState(false);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [dataCategory, setDataCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [productImage, setProductImage] = useState(null);
  const [product, setProduct] = useState([]);
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
                    onClick={() => setShowModalProduct(!showModalProduct)}
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
