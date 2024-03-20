import React, { useState } from "react";
import { films } from "../data/films";
// import { FaFacebook } from "react-icons/fa";
// import { Avatar, Button, List } from "antd";

const ConditionalRendering2 = () => {
  const [originalData, setOriginalData] = useState(films);
  const [data, setData] = useState(films.filter((e) => e.Metascore !== "N/A"));
  const [yearSelected, setYearSelected] = useState("");

  const handleSort = (type) => {
    const items = [...originalData];
    items.sort((a, b) =>
      type === "ab"
        ? parseFloat(a.Metascore) - parseFloat(b.Metascore)
        : parseFloat(b.Metascore) - parseFloat(a.Metascore)
    );
    setData(items);
  };
  return (
    <div>
      <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        Score:
        <button onClick={() => handleSort("ab")}>Nhỏ đến lớn</button>
        <button onClick={() => handleSort("NA")}>Lớn đến nhỏ</button>
        <button onClick={() => setData(films)}>Clear</button>
      </span>
      {films.map((item) => (
        <button
          style={{ margin: "10px" }}
          onClick={() => setYearSelected(item.Year)}
        >
          {item.Year}
        </button>
      ))}

      <ul>
        {data.map(
          (item, index) =>
            yearSelected === item.Year && (
              <li style={{ padding: "10px" }}>
                <h2>
                  {item.Title}
                  {"  "}
                  {item.Metascore}
                </h2>
                <p>{item.Plot}/</p>
                {item.Type === "movie" ? "Phim rap" : "Phim truyen hinh"}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default ConditionalRendering2;
