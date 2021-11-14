import React from "react";
import "./../style/App.css";
import "./../style/content.css";
import Menu from "../components/MenuAdmin";
import Bread from "../components/Bread";
import CultureList from "../components/CultureList";
import img from "../files/admin2.png";

function AdminEdit() {
  return (
    <div className="App">
      <Menu type="entity" />
      <div className="content">
        <Bread title="Культура" />
        <div className="block block-1">
          <h1>Культура</h1>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AdminEdit;
