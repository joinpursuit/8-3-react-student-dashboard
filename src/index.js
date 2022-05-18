import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Data from "./data/data.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App object={Data} />
	</React.StrictMode>
);
