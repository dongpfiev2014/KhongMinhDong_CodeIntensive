import React from "react";

const ButtonComponent = (props) => {
  const { color, padding, text, onClick, borderRadius } = props;

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color ?? "aqua",
        padding: padding ?? 12,
        margin: 12,
        borderRadius: borderRadius,
        border: "none",
        fontSize: 16,
      }}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
