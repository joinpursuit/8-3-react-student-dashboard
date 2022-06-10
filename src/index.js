import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ALLSTUDENTS from "./data/data.json"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App allStudents={ALLSTUDENTS} />
  </React.StrictMode>
);
