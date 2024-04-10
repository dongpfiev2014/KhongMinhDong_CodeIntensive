import React, { useRef, useState } from "react";
import { ButtonComponent, Card } from "../components";
import "../styles/GlobalStyles.css";

const ToDoList = () => {
  const [Tasks, setTasks] = useState([]);
  const [originalTasks, setOriginalTasks] = useState([]);
  const [Contents, setContents] = useState("");
  const [EditID, setEditID] = useState(-1);
  const [AllisActive, setAllIsActive] = useState(false);
  const [PendingisActive, setPendingisActive] = useState();
  const [CompletedisActive, setCompletedisActive] = useState();
  const inputRef = useRef(null);

  const handleAddNewTask = () => {
    const items = [...originalTasks];
    if (Contents) {
      //Kiểm tra xem công việc đang chỉnh sửa hay ko bằng EditID, nếu không thì tạo mới
      if (EditID !== -1) {
        items[EditID].Contents = Contents;
        setEditID(-1);
      } else {
        const data = {
          id: Date.now(),
          isCompleted: false,
          Contents,
          createdAt: Date.now(),
        };
        items.push(data);
      }
      setTasks(items);
      setOriginalTasks(items);
      setContents("");
    } else {
      alert("Content is required");
    }
  };

  const handleClearTask = (id) => {
    const items = [...originalTasks];
    const index = items.findIndex((element) => element.id === id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    setTasks(items);
    setOriginalTasks(items);
  };

  const handleEditTask = (id) => {
    const items = [...originalTasks];
    const index = items.findIndex((element) => element.id === id);
    if (index !== -1) {
      setContents(items[index].Contents);
      inputRef.current.focus();
      setEditID(index);
    }
  };
  return (
    <div>
      <Card>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <input
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "35px",
              border: "1px solid white",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              paddingLeft: "10px",
            }}
            type="text"
            onKeyDown={(val) => {
              if (val.key === "Enter") {
                setContents(val.target.value);
                handleAddNewTask();
              }
            }}
            onChange={(val) => {
              setContents(val.target.value);
            }}
            ref={inputRef}
            value={Contents}
            name=""
            id=""
            placeholder="What do you want to do?"
          />
          <ButtonComponent
            width="15%"
            color="rgb(214, 203, 203)"
            text="Add"
            fontSize="20px"
            onClick={handleAddNewTask}
          ></ButtonComponent>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <ButtonComponent
            text="All"
            fontSize="18px"
            FontColor={AllisActive ? "rgb(4, 149, 216)" : "black"}
            onClick={() => {
              const items = [...originalTasks];
              setTasks(items);
              setAllIsActive(true);
              setCompletedisActive(false);
              setPendingisActive(false);
            }}
          ></ButtonComponent>
          <ButtonComponent
            text="Pending"
            fontSize="18px"
            FontColor={PendingisActive ? "rgb(4, 149, 216)" : "black"}
            onClick={() => {
              const items = [...originalTasks];
              const incompleteTasks = items.filter((task) => !task.isCompleted);
              setTasks(incompleteTasks);
              setAllIsActive(false);
              setCompletedisActive(false);
              setPendingisActive(true);
            }}
          ></ButtonComponent>
          <ButtonComponent
            text="Completed"
            fontSize="18px"
            FontColor={CompletedisActive ? "rgb(4, 149, 216)" : "black"}
            onClick={() => {
              const items = [...originalTasks];
              const completedTasks = items.filter((task) => task.isCompleted);
              setTasks(completedTasks);
              setAllIsActive(false);
              setCompletedisActive(true);
              setPendingisActive(false);
            }}
          ></ButtonComponent>
          <ButtonComponent
            text="Clear All"
            fontSize="18px"
            FontColor="rgb(4, 149, 216)"
            onClick={() => {
              setTasks([]);
              setOriginalTasks([]);
            }}
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
              <span
                style={{
                  width: "100%",
                  fontSize: "18px",
                  textDecorationLine: item.isCompleted
                    ? "line-through"
                    : "none",
                }}
              >
                {item.Contents}
              </span>
              <button
                onClick={() => handleEditTask(item.id)}
                className="TaskButton"
                style={{ border: "none" }}
              >
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
