import React, { useState } from "react";
import { globalStyles } from "../styles/GlobalStyles";
import "../styles/GlobalStyles.css";
import { ButtonComponent, Card, InputComponents } from "../components";
import { handleGetDate } from "../utils/handleGetDate";

const HomeScreen = () => {
  // const a = 5;
  // const b = 6;
  // const baseUrl = `https://gamek.mediacdn.vn/`;
  // const photoUrl = `133514250583805952/2021/6/3/kratos-4759x2678-god-of-war-ps4-2017-games-4k-1282-16226920764341896839959.jpg`;
  // const styles = {
  //   color: "blue",
  //   fontWeight: "800",
  //   fontSize: 40,
  // };

  // let name = "";
  // const LoadValue = () => {
  //   console.log(name);
  // };

  const [name, setName] = useState("MindX");
  const [age, setAge] = useState("");

  return (
    <div>
      {/* <h1>a + b = {a + b}</h1>
      <p>Today is {new Date().toString()} </p>
      <h1 style={styles}>a + b = {`${a} + ${b} = ${a + b}`}</h1> */}
      {/* <img src={`https://gamek.mediacdn.vn/${photoUrl}`} alt="" /> */}
      {/* <button style={globalStyles.button} className="btn-success">
        Hi
      </button> */}
      <Card name="Đông" email="dong@gmail.com" phoneNumber="012345" />

      <ButtonComponent
        onClick={() => alert("sida")}
        text="Say Hello"
        borderRadius={15}
      />

      <ButtonComponent
        onClick={() => alert("sida vcl")}
        color="coral"
        text="Say Bye"
      />

      <Card color="violet">
        <h1>MindX</h1>
        <p>Hi</p>
      </Card>

      <InputComponents
        type="number"
        prefix="a"
        onChange={(val) => console.log(val)}
      />

      <ButtonComponent
        onClick={() => {
          handleGetDate();
        }}
      />

      <div>
        <p>{name}</p>
        <p>{age}</p>
        {/* <input
          onChange={(event) => {
            name = event.target.value;
          }}
          type="text"
          name=""
          id=""
        /> */}
        <button
          style={{ height: 30 }}
          onClick={() => setName("Đông đại ca")}
        ></button>
      </div>
    </div>
  );
};

export default HomeScreen;
