import React, { useState } from "react";

export function Counter() {
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
