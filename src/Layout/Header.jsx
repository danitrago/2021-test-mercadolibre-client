import React from "react";

const Header = () => {
  return (
    <div>
      <form action="/items">
        <input
          type="text"
          placeholder="Nunca pares de buscar..."
          name="search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Header;
