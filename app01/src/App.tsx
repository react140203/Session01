import reactLogo from "./assets/react.svg";
import "./App.css";
import React, { useState } from "react";

//Component React -> PascalCase
function App() {
  const [showLogo, setShowLogo] = useState(true);
  const toggle = () => {
    setShowLogo(!showLogo);
  };
  return (
    <>
      <button onClick={toggle}>toggle</button>
      {showLogo && <Logo />}
      <Counter />
    </>
  );
}

export default App;

function Counter() {
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
      <h1>Counter: {counter} </h1>
      <button onClick={inc}>➕</button>
      <button onClick={dec}>➖</button>
    </>
  );
}

function Logo() {
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}
