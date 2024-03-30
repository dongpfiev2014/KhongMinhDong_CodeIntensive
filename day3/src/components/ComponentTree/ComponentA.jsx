import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = ({ theme }) => {
  return (
    <div>
      <ComponentB theme={theme} />
    </div>
  );
};

export default ComponentA;
