import React from "react";
import "./../style/App.css";
import "./../style/content.css";
import Menu from "../components/Menu";
import Bread from "../components/Bread";
import Result from "../components/Result";
import CultureList from "../components/CultureList";

function ResultPage() {
  let cultures = require("../data/cultures.json");
  return (
    <div className="App">
      <Menu />
      <div className="content">
        <Bread />
        <Result map={{ center: [56.631657, 47.885973] }} />
      </div>
    </div>
  );
}

export default ResultPage;
