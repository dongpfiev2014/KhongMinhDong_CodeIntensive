import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <hr />
      <br />
      <h2>HomeScreen</h2>
      <br />
      <br />
      <Link to={"/settings"}>Settings</Link>
      <br />
      <br />
      <Link to={"/products/69"}>Product 69</Link>
      <br />
      <br />
      <Link to={"/product-detail?key=value&name=abcd&id=1234"}>
        Product Details
      </Link>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default HomeScreen;
