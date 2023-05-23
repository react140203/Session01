import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";

//win 10, win 11  -> win + .
function App() {
  let counter = 0;
  const inc = () => {
    counter += 1;
  };
  //Expression
  const incFn1 = function () {
    counter += 1;
  };
  //Statement
  function incFn2() {
    //this
    counter += 1;
  }
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter: {counter} </h1>
      <button onClick={inc}>➕</button>
      <button>➖</button>
    </>
  );
}

export default App;
