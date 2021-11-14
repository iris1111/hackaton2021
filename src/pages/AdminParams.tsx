import React from "react";
import "./../style/App.css";
import "./../style/content.css";
import Menu from "../components/MenuAdmin";
import Bread from "../components/Bread";
import CultureList from "../components/CultureList";
import img from "../files/admin4.png";

function AdminParams() {
  let cultures = require("../data/cultures.json");
  return (
    <div className="App">
      <Menu type="dop" />
      <div className="content">
        <Bread title="Вспомогательные параметры" />
        <div className="block block-1">
          <h1>Вспомогательные параметры</h1>
          <a href="/admin/params/edit">
            <img src={img} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdminParams;
