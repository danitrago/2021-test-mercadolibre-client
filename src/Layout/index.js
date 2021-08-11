import React from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <hr />
      {props.children}
    </div>
  );
};

export default Layout;
