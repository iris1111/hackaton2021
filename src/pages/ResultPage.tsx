import React from "react";
import Bread from "../components/Bread";
import Menu from "../components/Menu";
import Result from "../components/Result";
import "./../style/App.css";
import "./../style/content.css";

function ResultPage() {
  return (
    <div className="App">
      <Menu />
      <div className="content">
        <Bread title="Бизнес-планер"/>
        <Result map={{ center: [56.631657, 47.885973] }} />
      </div>
    </div>
  );
}

export default ResultPage;
