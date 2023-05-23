import reactLogo from "./assets/react.svg";
import "./App.css";
import React, { useState } from "react";

//Component React -> PascalCase
function App() {
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
      {counter !== 10 && <Logo />}

      <h1>Counter: {counter} </h1>
      <button onClick={inc}>➕</button>
      <button onClick={dec}>➖</button>
    </>
  );
}

export default App;

function Logo() {
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}
