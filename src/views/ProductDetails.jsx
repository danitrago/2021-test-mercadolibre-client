import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
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
  }, []);

  return (
    <div>
      Product Details {id}
      <hr />
      Data:
      {JSON.stringify(productData)}
    </div>
  );
};

export default ProductDetails;
