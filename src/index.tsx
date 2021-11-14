import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import App from "./pages/App";
import "./style/index.css";
import ResultPage from "./pages/ResultPage";
import Formula from "./pages/Formula";

// localStorage.setItem("cultures", JSON.stringify(culturesData));

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/formula" element={<Formula />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
