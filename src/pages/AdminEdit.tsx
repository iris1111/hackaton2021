import React from "react";
import "./../style/App.css";
import "./../style/content.css";
import Menu from "../components/MenuAdmin";
import Bread from "../components/Bread";
import CultureList from "../components/CultureList";
import img from '../files/admin1.png';

function AdminEdit() {
  return (
    <div className="App">
      <Menu type="entity" />
      <div className="content">
        <Bread />
        <div className="block block-1">
          <h1>Растения</h1>
          <a href="/admin/edit/entity"><img src={img} alt="" /></a>
        </div>        
      </div>
    </div>
  );
}

export default AdminEdit;
