import reactLogo from "./assets/react.svg";
import "./App.css";
import React, { useState } from "react";

//win 10, win 11  -> win + .
function App() {
  //State
  //Hook
  // const stateArray = useState(10);
  // const counter = stateArray[0];
  // const setCounter = stateArray[1];
  //Destructure
  const [counter, setCounter] = useState(10);

  const inc = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const dec = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <>
      {counter !== 10 ? (
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      ) : null}

      <h1>Counter: {counter} </h1>
      <button onClick={inc}>➕</button>
      <button onClick={dec}>➖</button>
    </>
  );
}

export default App;
