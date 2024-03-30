import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({ theme }) => {
  return (
    <div>
      <ComponentC theme={theme} />
    </div>
  );
};

export default ComponentB;
