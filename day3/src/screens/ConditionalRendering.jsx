import React, { useState } from "react";
import { films } from "../data/films";

const ConditionalRendering = () => {
  const [data, setData] = useState(films);

  const handleView = (index) => {
    const items = [...data];
    items[index].isView = items[index].isView ? false : true;
    setData(items);
  };
  return (
    <div>
      <ul>
        {data.map(
          (item, index) =>
            !item.isView && (
              <li
                key={`${index}`}
                style={{
                  padding: "12px 0",
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <img src={item.Images[0]} width={100} height={80} alt="" />
                {item.Title}
                <button onClick={() => handleView(index)}>Xem</button>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default ConditionalRendering;
