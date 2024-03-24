import React, { useState, useEffect } from "react";
import UserEffect from "./UserEffect";

const Lesson8 = () => {
  const [listData, setListData] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    getTasksFromLocal();
  }, []);

  const getTasksFromLocal = () => {
    const res = localStorage.getItem("tasks");
    if (res) {
      setListData(JSON.parse(res));
    }
  };

  const handleAddNewTask = () => {
    if (task) {
      const items = [...listData];
      items.push(task);
      setListData(items);
      setTask("");
      localStorage.setItem("tasks", JSON.stringify(items));
    } else alert("Tào lao");
  };

  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     getUsers();
  //   });

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCount((count) => count + 1);
  //       console.log(count);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);

  /*
     Local Storage => session token, fcmtoken, email
     Api => tất cả 
     setInterval, setTimeout
   */

  //   const getUsers = async () => {
  //     const api = `https://jsonplaceholder.typicode.com/users`;
  //     try {
  //       await fetch(api)
  //         .then((res) => res.json())
  //         .then((results) => {
  //           setListData(results);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div>
      <h1>Todo list: </h1>
      <input
        type="text"
        name=""
        id=""
        value={task}
        onChange={(val) => setTask(val.target.value)}
      />
      <button onClick={handleAddNewTask}>Add</button>
      <ul>
        {listData.map((item, index) => (
          <li key={`item${index}`}>{item} </li>
        ))}
      </ul>
    </div>
  );
};

export default Lesson8;
