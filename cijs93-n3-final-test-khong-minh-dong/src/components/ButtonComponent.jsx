import React from "react";

const ButtonComponent = (props) => {
  const {
    color,
    padding,
    text,
    onClick,
    borderRadius,
    fontSize,
    width,
    FontColor,
  } = props;
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color ?? "white",
        color: FontColor,
        padding: padding ?? 12,
        margin: 0,
        borderRadius: borderRadius,
        border: "none",
        fontSize: fontSize ?? "25px",
        fontWeight: 700,
        width: width ?? "100%",
        height: "20px",
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
