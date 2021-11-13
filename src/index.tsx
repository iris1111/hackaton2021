import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import App from "./pages/App";
import "./style/index.css";
import culturesData from "./data/cultures.json";
import ResultPage from "./pages/ResultPage";

// localStorage.setItem("cultures", JSON.stringify(culturesData));

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
