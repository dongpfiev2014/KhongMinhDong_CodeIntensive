import React, { useState } from "react";
import { ButtonComponent, Card } from "../components";
import "../styles/GlobalStyles.css";

const ToDoList = () => {
  const [Tasks, setTasks] = useState([]);
  const [Contents, setContents] = useState("");

  const handleAddNewTask = () => {
    if (Contents) {
      const items = [...Tasks];
      const data = {
        id: Date.now(),
        isCompleted: false,
        Contents,
        createdAt: Date.now(),
      };
      items.push(data);
      setTasks(items);
      setContents("");
    } else {
      alert("Content is required");
    }
  };
  const handleClearTask = (id) => {
    const items = [...Tasks];
    const index = Tasks.findIndex((element) => element.id === id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    setTasks(items);
  };
  return (
    <div>
      <Card>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <input
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "40px",
              border: "1px solid white",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              paddingLeft: "10px",
            }}
            type="text"
            onChange={(val) => setContents(val.target.value)}
            value={Contents}
            name=""
            id=""
            placeholder="What do you want to do?"
          />
          <ButtonComponent
            color="rgb(214, 203, 203)"
            text="Add"
            fontSize="20px"
            onClick={handleAddNewTask}
          ></ButtonComponent>
        </div>
        {Tasks.map((item, index) => (
          <div key={item.id}>
            <div className="Task">
              <input
                style={{ width: "10%" }}
                type="checkbox"
                onClick={() => {
                  const items = [...Tasks];
                  items[index].isCompleted = !items[index].isCompleted;
                  setTasks(items);
                }}
                checked={item.isCompleted}
                name=""
                id=""
              />
              <span style={{ width: "100%", fontSize: "18px" }}>
                {item.Contents}{" "}
              </span>
              <button className="TaskButton" style={{ border: "none" }}>
                Edit
              </button>
              <button
                onClick={() => handleClearTask(item.id)}
                className="TaskButton"
                style={{ border: "none" }}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ToDoList;
