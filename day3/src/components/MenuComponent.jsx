import React from "react";

const MenuComponent = (props) => {
  const { fontWeight, fontSize, text, color } = props;
  return (
    <button
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
      }}
    >
      {text}
    </button>
  );
};

export default MenuComponent;
