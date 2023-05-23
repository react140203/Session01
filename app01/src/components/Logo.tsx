import reactLogo from "../assets/react.svg";
import React from "react";

export function Logo() {
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}
