import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import api from "../../Helpers/api-endpoint";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import { Navbar, Jumbotron, Footer, ProductCard } from "../../Component";

import "./style.css";

function HomePage() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      let products = await api.post("/api/search/", {
        amount: 7,
      });
      setProduct(products.data);
    };

    fetchProduct();
  }, []);

  return (
    <div className="__homePage">
      <Navbar />
      <Jumbotron />
      <div className="container">
        {/* Main */}
        <div className="__homeSection">
          <h4>Jual Ikan Cupang Hias Berkualitas</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            consequuntur corrupti beatae ullam est animi reiciendis, aut quas ea
            voluptatum quo veritatis impedit doloremque expedita dicta et at
            ducimus, optio numquam. Nemo doloribus harum, illum vitae fugit
            eaque corrupti odit blanditiis ad ratione quo dignissimos recusandae
            ea? Quae, harum sapiente.
          </p>
          <div className="__homeSectionWa">
            <WhatsAppIcon fontSize="large" style={{
              color: 'green',
              marginRight: '10px'
            }} />
            <span>
              <NavLink to="#">0888 8888 4212</NavLink>
            </span>
          </div>
        </div>
        {/* End Main */}
        {/* Product */}
        <div className="__homeProduct">
          <h1>Produk Kami</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            repudiandae veritatis eos nostrum quibusdam ullam!
          </p>
          <div className="__homeProductList">
            <div className="row">
              {/* {product.map((data) => (
                <div className="col-lg-3 col-md-4" key={data.id}>
                  <ProductCard img={data.image} name={data.title} />
                </div>
              ))} */}
              <div className="col-lg-3 col-md-4">
                <ProductCard
                  img="https://i.ytimg.com/vi/KaNrpVqcK8k/maxresdefault.jpg"
                  name="Cupang Albino"
                />
              </div>
              <div className="col-lg-3 col-md-4">
                <ProductCard
                  img="https://celotehriau.com/assets/berita/original/29211048875-ikan-cupang-half-moon.jpeg"
                  name="Cupang Merah"
                />
              </div>
              <div className="col-lg-3 col-md-4">
                <ProductCard
                  img="https://republikseo.net/wp-content/uploads/2020/09/Ikan-Cupang-Giant.jpg"
                  name="Cupang Giant"
                />
              </div>
              <div className="col-lg-3 col-md-4">
                <ProductCard
                  img="https://4.bp.blogspot.com/-2tlYMRcf4zc/WlR4lzdQrtI/AAAAAAAAEtE/QHg-CdL4diMVcloe2uLuKkTeTeEbJ5xJQCLcBGAs/s1600/betta%2B2.jpg"
                  name="Cupang Biru"
                />
              </div>
              <div className="col-lg-3 col-md-4">
                <ProductCard
                  img="https://i.ytimg.com/vi/zfc_J3Pn44c/maxresdefault.jpg"
                  name="Cupang Avatar"
                />
              </div>
              <div className="col-lg-3 col-md-4">
                <ProductCard
                  img="https://d3p0bla3numw14.cloudfront.net/news-content/img/2020/09/23135408/image11.jpg"
                  name="Cupang Dori"
                />
              </div>
              <div className="col-lg-3 col-md-4">
                <ProductCard
                  img="https://2.bp.blogspot.com/_TzWR3SD8aCI/S_dApdITncI/AAAAAAAAAAU/FDfzUMkr58k/w1200-h630-p-k-no-nu/SuperRedHalfMoon.jpg"
                  name="Cupang Halfmoon"
                />
              </div>
            </div>
            <NavLink to="/products" className="btn btn-secondary mt-5 mb-5">
              Katalog Produk
            </NavLink>
          </div>
        </div>
        {/* End product */}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
