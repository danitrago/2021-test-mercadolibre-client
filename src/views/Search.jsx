import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { API_URL } from "../helpers";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const [products, setProducts] = useState([]);
  let query = useQuery();

  useEffect(() => {
    fetch(`${API_URL}/items?q=${query.get("search")}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.items);
      });
  }, []);

  return (
    <div>
      Search results for: {query.get("search")}
      <Link to="/items/123">Product</Link>
      {JSON.stringify(products)}
    </div>
  );
};

export default Search;
