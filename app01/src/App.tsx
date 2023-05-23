import "./App.css";
import React, { useState } from "react";
import { Logo } from "./components/Logo";
import { Counter } from "./components/Counter";

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
