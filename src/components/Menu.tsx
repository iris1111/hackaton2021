import React from "react";
import "./../style/Menu.css";
import logo from "./../files/logo.svg";

function Menu(props) {
  return (
    <div className="Menu block">
      <a href="/main">
        <img src={logo} className="Menu-logo" alt="logo" />
      </a>
      <nav className="Menu-nav">
        <li className="Menu-graph">
          <a href="#"></a>
        </li>
        <li className="Menu-maps">
          <a href="#"></a>
        </li>
        <li className="Menu-people">
          <a href="#"></a>
        </li>
        <li className="Menu-faq">
          <a href="#"></a>
        </li>
      </nav>
    </div>
  );
}

export default Menu;
