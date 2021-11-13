import React from "react";
import "./../style/Main.css";
import Bread from "./Bread";
import CalcStep1 from "./CalcStep1";

function Main() {
  return (
    <div className="Main">
      <Bread />
      <CalcStep1 />
    </div>
  );
}

export default Main;
