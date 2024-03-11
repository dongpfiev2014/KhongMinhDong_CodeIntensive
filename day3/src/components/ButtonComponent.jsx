import React from "react";

const ButtonComponent = (props) => {
  const { color, padding, text, onClick, borderRadius, fontSize } = props;
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color ?? "beige",
        padding: padding ?? 12,
        margin: 0,
        borderRadius: borderRadius,
        border: "none",
        fontSize: fontSize ?? "25px",
        fontWeight: 700,
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
