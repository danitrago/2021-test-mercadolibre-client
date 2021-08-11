import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Breadcrums from "../components/Breadcrums";
import MainCard from "../components/MainCard";
import ProductCard from "../components/ProductCard";
import { API_URL } from "../helpers";

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
  }, [query]);

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
  );
};

export default Search;
