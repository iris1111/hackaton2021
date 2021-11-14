import React from "react";
import "./../style/App.css";
import "./../style/content.css";
import Menu from "../components/MenuAdmin";
import Bread from "../components/Bread";
import CultureList from "../components/CultureList";
import img from "../files/admin3.png";

function AdminEditEntity() {
  let cultures = require("../data/cultures.json");
  return (
    <div className="App">
      <Menu type="entity" />
      <div className="content">
        <Bread title="Вспомогательные параметры" />
        <div className="block block-1">
          <h1>Редактирование значения параметра</h1>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AdminEditEntity;
