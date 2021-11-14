import React from "react";
import "./../style/App.css";
import "./../style/content.css";
import Menu from "../components/MenuAdmin";
import Bread from "../components/Bread";
import CultureList from "../components/CultureList";
import img from '../files/admin5.png';

function AdminParamsEdit() {
  let cultures = require("../data/cultures.json");
  return (
    <div className="App">
      <Menu  type="dop"/>
      <div className="content">
        <Bread />
        <div className="block block-1">
          <h1>Влажность</h1>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AdminParamsEdit;
