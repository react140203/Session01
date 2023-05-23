import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";

function App() {
  //JSX
  //<></> Fragment
  /*
  Programming syntax
    statement  ❌
    expression ✔️
  */

  //Compiler:   source => code bin
  //Transpiler: source => source code fg
  // typescript => javascript
  // javascript 2022 => javascript 6
  const msg = "سلام دنیا 💃 🎉 ";
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ color: "red" }}>{msg}</h1>
    </>
  );
}

export default App;
