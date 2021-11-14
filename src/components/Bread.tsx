import React from "react";
import "./../style/Bread.css";

function Bread(props) {
  return (
    <div className="Bread block">
      <ul className="Bread-list">
        <li>
          <a href="#">Старт</a>
        </li>
        <li>
          <a href="#">Данные</a>
        </li>
        <li className="active">
          <a>{props.title}</a>
        </li>
      </ul>
    </div>
  );
}

export default Bread;
