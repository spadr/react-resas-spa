import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Config from "./config";
import { getPrefecture, getPopulation } from "./apiFetch";

function App() {
  console.log("Prefecture");
  console.log(getPrefecture());
  console.log("Population");
  console.log(getPopulation());
  console.log("apiKey");
  console.log(Config.apiKey);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
