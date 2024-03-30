import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const key = searchParams.get("key");
  const name = searchParams.get("name");
  const id = searchParams.get("id");
  console.log(key, name, id);
  return (
    <div>
      <hr />
      <br />
      <h2>Products Details: </h2>
      <button
        onClick={() => {
          searchParams.set("id", "atm890");
          window.location.search = searchParams.toString();
        }}
      >
        Button
      </button>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default ProductDetail;
