import React from "react";
import LogoImg from "../static/logo.png";
import SearchImg from "../static/search.png";

const Header = () => {
  return (
    <div className="main-header">
      <div className="main-header__row container">
        <div className="main-header__logo">
          <a href="/">
            <img src={LogoImg} alt="Logo Mercado Libre" />
          </a>
        </div>
        <div className="main-header__search">
          <form action="/items">
            <input
              type="text"
              placeholder="Nunca pares de buscar..."
              name="search"
              required
            />
            <button type="submit">
              <img src={SearchImg} alt="Buscar" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
