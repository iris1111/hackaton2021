import React from "react";
import logo from "./files/logo.svg";
import "./../style/App.css";
import Menu from "../components/Menu";
import Main from "../components/Main";

function App() {
  return (
    <div className="App">
      <Menu />
      <Main />
    </div>
  );
}

export default App;
