import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import App from "./pages/App";
import "./style/index.css";
import culturesData from "./data/cultures.json";
import locationsData from "./data/locations.json";
import regionsData from "./data/regions.json";
import ResultPage from "./pages/ResultPage";
import Formula from "./pages/Formula";
import AdminEdit from "./pages/AdminEdit";
import AdminEditEntity from "./pages/AdminEditEntity";
import AdminParamsEdit from "./pages/AdminParamsEdit";
import AdminParams from "./pages/AdminParams";
import Main from "./components/Main";
import Show from "./pages/Show";

if (!localStorage.getItem("cultures")) {
  localStorage.setItem("cultures", JSON.stringify(culturesData));
}
if (!localStorage.getItem("locations")) {
  localStorage.setItem("locations", JSON.stringify(locationsData));
}
if (!localStorage.getItem("regions")) {
  localStorage.setItem("regions", JSON.stringify(regionsData));
}

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Formula />} />
        <Route path="/admin/entity" element={<Admin />} />
        <Route path="/admin/edit" element={<AdminEdit />} />
        <Route path="/admin/edit/entity" element={<AdminEditEntity />} />
        <Route path="/admin/params" element={<AdminParams />} />
        <Route path="/admin/params/edit" element={<AdminParamsEdit />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/main" element={<Show />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
