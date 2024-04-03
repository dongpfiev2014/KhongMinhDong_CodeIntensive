import React from "react";
import { useParams } from "react-router-dom";

const ProductsScreen = () => {
  // Truyền useParams
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <hr />
      <br />
      <h2>The number of Products: {id}</h2>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default ProductsScreen;
