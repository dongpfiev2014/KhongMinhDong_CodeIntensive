import React, { useEffect, useRef, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import Card from "../components/Card";
import { Button, Input, Checkbox } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import useLocalStorage from "use-local-storage";

const ToDoList = () => {
  const [Tasks, setTasks] = useState([]);
  const [originalTasks, setOriginalTasks] = useLocalStorage("tasks", []);
  const [Contents, setContents] = useState("");
  const [EditID, setEditID] = useState(-1);
  const [AllisActive, setAllIsActive] = useState(true);
  const [PendingisActive, setPendingisActive] = useState();
  const [CompletedisActive, setCompletedisActive] = useState();
  const inputRef = useRef(null);

  useEffect(() => {
    setTasks(originalTasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      handleTabTask(items);
      setContents("");
    } else {
      alert("Content is required");
    }
  };

  const handleTabTask = (items) => {
    if (AllisActive) {
      setTasks(items);
    } else if (PendingisActive) {
      const PendingTasks = items.filter(
        (element) => element.isCompleted === false
      );
      setTasks(PendingTasks);
    } else if (CompletedisActive) {
      const CompletedTasks = items.filter(
        (element) => element.isCompleted === true
      );
      setTasks(CompletedTasks);
    }
    setOriginalTasks(items);
  };

  const handleClearTask = (id) => {
    const items = [...originalTasks];
    const index = items.findIndex((element) => element.id === id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    handleTabTask(items);
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
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className="m-5">#Todo</h1>
      <Card>
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
            text="Active"
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
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <Input
            placeholder="What do you want to do ?"
            size="large"
            type="text"
            ref={inputRef}
            value={Contents}
            onKeyDown={(val) => {
              if (val.key === "Enter") {
                setContents(val.target.value);
                handleAddNewTask();
              }
            }}
            onChange={(val) => {
              setContents(val.target.value);
            }}
          ></Input>
          <Button
            type="primary"
            onClick={() => {
              handleAddNewTask();
            }}
            size="large"
          >
            Add
          </Button>
        </div>
        {Tasks.map((item, index) => (
          <div key={item.id} className="d-flex justify-content-between mt-2">
            <Checkbox
              onClick={() => {
                const updatedTasks = originalTasks.map((task) => {
                  if (task.id === item.id) {
                    return { ...task, isCompleted: !item.isCompleted };
                  }
                  return task;
                });
                handleTabTask(updatedTasks);
                setOriginalTasks(updatedTasks);
              }}
              checked={item.isCompleted}
            >
              <span
                style={{
                  textDecorationLine: item.isCompleted
                    ? "line-through"
                    : "none",
                  fontSize: "15px",
                }}
              >
                {item.Contents}
              </span>
            </Checkbox>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                onClick={() => handleEditTask(item.id)}
                size="small"
                icon={<EditOutlined />}
              ></Button>
              <Button
                onClick={() => handleClearTask(item.id)}
                danger
                size="small"
                icon={<DeleteOutlined />}
              ></Button>
            </div>
          </div>
        ))}
        <Button
          type="primary"
          danger
          size="large"
          style={{ float: "right", marginTop: "10px" }}
          onClick={() => {
            setTasks([]);
            setOriginalTasks([]);
          }}
        >
          Delete All
        </Button>
      </Card>
    </div>
  );
};

export default ToDoList;
