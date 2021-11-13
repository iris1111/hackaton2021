import React from 'react';
import './../style/Menu.css';
import logo from './../files/logo.svg';

function Menu() {
  return (
    <div className="Menu block">
      <img src={logo} className="Menu-logo" alt="logo" />
      <nav className="Menu-nav">
        <li className="Menu-entity"><a href="/admin/entity"></a></li>
        <li className="Menu-dop"><a href="/admin/params"></a></li>
        <li className="Menu-sett"><a href="/admin/formula"></a></li>
      </nav>
    </div>
  );
}

export default Menu;
