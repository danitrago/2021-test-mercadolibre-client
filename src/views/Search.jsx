import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { API_URL } from "../helpers";
import Breadcrums from "../components/Breadcrums";
import MainCard from "../components/MainCard";
import ProductCard from "../components/ProductCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const [products, setProducts] = useState([]);
  const [breadCrums, setBreadCrums] = useState([]);
  let query = useQuery();

  useEffect(() => {
    fetch(`${API_URL}/items?q=${query.get("search")}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.items);
        setBreadCrums(data.categories);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <Breadcrums items={breadCrums} resultsFor={query.get("search")} />
      </div>
      <div className="container">
        <MainCard>
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </MainCard>
      </div>
    </React.Fragment>
    // <div>
    //   Search results for: {query.get("search")}
    //   <hr />
    //   {products ? (
    //     <ul>
    //       {products.map((product) => {
    //         return (
    //           <li key={product.id}>
    //             {product.title} <Link to={`/items/${product.id}`}>Ver</Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   ) : (
    //     "Empty"
    //   )}
    // </div>
  );
};

export default Search;
