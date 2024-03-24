import React from "react";
import TextComponent from "./TextComponent";

const FilmComponent = (props) => {
  const { movieName, episode, imgSource } = props;
  return (
    <div
      style={{
        flex: "1",
        position: "relative",
        backgroundColor: "#192026",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: "15px",
        }}
      >
        <img
          src={imgSource}
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            backgroundColor: "#192026",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          bottom: 0,
          borderRadius: "15px",
          background:
            "linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #0F1E29 100%)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "5%",
          transform: "translate(-50%)",
          fontWeight: "400",
          fontSize: "18px",
          backgroundColor: "transparent",
          color: "white",
          textAlign: "center",
        }}
      >
        {episode}
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "101%",
          transform: "translate(-50%)",
          fontWeight: "700",
          fontSize: "20px",
          backgroundColor: "transparent",
          color: "white",
          width: "100%",
          textAlign: "center",
        }}
      >
        {movieName}
      </div>
    </div>
  );
};

export default FilmComponent;
