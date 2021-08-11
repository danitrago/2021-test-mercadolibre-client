import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Breadcrums from "../components/Breadcrums";
import MainCard from "../components/MainCard";
import ProductPricing from "../components/ProductPricing";
import { API_URL } from "../helpers";

const ProductDetails = () => {
  const [productData, setProductData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.item);
      });
  }, [id]);

  return (
    <React.Fragment>
      <div className="container">
        <Breadcrums items={productData.categories} />
      </div>
      <div className="container">
        <MainCard>
          <div className="row mb-2">
            <div className="product-gallery">
              <img
                src={productData.picture}
                alt={productData.title}
                className="product-gallery__picture"
              />
            </div>
            <ProductPricing productData={productData} />
          </div>
          <div className="row">
            <div className="product-description">
              <h3 className="product-description__title">
                Descripción del producto
              </h3>
              <p className="product-description__text">
                {productData.description}
              </p>
            </div>
          </div>
        </MainCard>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
