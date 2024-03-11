import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Calculator from "./screens/CalculatorScreen";
import CalculatorScreen from "./screens/CalculatorScreen";
import LoginScreen from "./screens/LoginScreen";
import PcCalculatorScreen from "./screens/PcCalculatorScreen";
import ToDoList from "./screens/ToDoList";

function App() {
  // JSX - Javascript XML
  return (
    // <HomeScreen />
    // <LoginScreen />
    // <PcCalculatorScreen />
    <ToDoList />

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
