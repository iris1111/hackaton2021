import React from "react";
import "./../style/App.css";
import "./../style/Show.css";
import Menu from "../components/Menu";
function Show() {
  return (
    <div className="App">
      <Menu />
      <div className="show-content">
        <p>
          <a href="/">Калькулятор</a>
        </p>
        <p>
          <a href="/admin">Админ панель</a>
        </p>
        <p>
          <a href="https://share.getcloudapp.com/5zu9PrLR">Скринкаст</a>
        </p>
      </div>
    </div>
  );
}

export default Show;
