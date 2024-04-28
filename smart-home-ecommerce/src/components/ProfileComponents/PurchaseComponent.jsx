import React from "react";
import { useSelector } from "react-redux";

const PurchaseComponent = () => {
  const auth = useSelector((state) => state.authen);
  console.log(auth);
  return <div>PurchaseComponent</div>;
};

export default PurchaseComponent;
