import "./App.css";
import React, { useState } from "react";
import { Logo } from "./components/Logo";
import { Counter } from "./components/Counter";

const tasks = [
  { name: "task 1", id: 1, done: true },
  { name: "task 2", id: 2, done: false },
  { name: "task 3", id: 3, done: true },
  { name: "task 4", id: 4, done: true },
];
//Component React -> PascalCase
function App() {
  const [showLogo, setShowLogo] = useState(true);
  const toggle = () => {
    setShowLogo(!showLogo);
  };
  return (
    <>
      <button onClick={toggle}>toggle</button>
      {showLogo && <Logo msg="salam" icon="⚛️" />}
      <Counter />
      {tasks.map((m) => (
        <>{m.name}</>
      ))}
    </>
  );
}

export default App;
