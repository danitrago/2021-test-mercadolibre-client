import React from "react";
import Shipping from "../static/shipping.png";
import { formatCurrency } from "../helpers";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <div className="card-product">
      <div className="card-product__image">
        <Link to={`/items/${data.id}`} title={data.title}>
          <img src={data.picture} alt={data.title} />
        </Link>
      </div>
      <div className="card-product__information">
        <div>
          <span className="price">
            <Link to={`/items/${data.id}`} title={data.title}>
              {formatCurrency.format(data.price.amount)}
            </Link>
          </span>
          {data.free_shipping && (
            <img
              className="card-product__freeship"
              src={Shipping}
              alt="Envío Gratis"
             
            />
          )}
        </div>
        <h2 className="name">
          <Link to={`/items/${data.id}`} title={data.title}>
            {data.title}
          </Link>
        </h2>
      </div>
      <div className="card-product__location">{data.state_name}</div>
    </div>
  );
};

export default ProductCard;
