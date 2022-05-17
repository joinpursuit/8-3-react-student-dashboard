import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import data from "./data/data";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);
