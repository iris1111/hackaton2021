import React from 'react';
import './../style/Menu.css';
import logo from './../files/logo.svg';

function Menu ({type}) {
  return (
    <div className="Menu block">
      <img src={logo} className="Menu-logo" alt="logo" />
      <nav className="Menu-nav">
        <li className={type=='set'?'Menu-sett active':'Menu-sett'}><a href="/admin"></a></li>
        <li className={type=='entity'?'Menu-entity active':'Menu-entity'}><a href="/admin/entity"></a></li>
        <li className={type=='dop'?'Menu-dop active':'Menu-dop'}><a href="/admin/params"></a></li>        
      </nav>
    </div>
  );
}

export default Menu;
