import React from "react";
import { formatCurrency } from "../helpers";

const ProductPricing = (props) => {
  return (
    <div className="product-pricing">
      <span className="product-pricing__sold">
        {props.productData.condition == "new" ? "Nuevo" : "Usado"} -{" "}
        {props.productData.sold_quantity} Vendidos
      </span>
      <h1 className="product-pricing__title">{props.productData.title}</h1>
      <span className="product-pricing__price">
        {formatCurrency.format(props.productData.price?.amount)}
      </span>
      <button className="product-pricing__buy">Comprar</button>
    </div>
  );
};

export default ProductPricing;
