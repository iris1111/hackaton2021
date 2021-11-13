import React from "react";
import "./../style/App.css";
import "./../style/content.css";
import Menu from "../components/MenuAdmin";
import Bread from "../components/Bread";
import CultureList from "../components/CultureList";

function Admin() {
  let cultures = require("../data/cultures.json");
  return (
    <div className="App">
      <Menu />
      <div className="content">
        <Bread />
        <CultureList data={cultures}></CultureList>
      </div>
    </div>
  );
}

export default Admin;
