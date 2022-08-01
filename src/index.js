import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";

import App from "./App";
import Footer from "./components/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(React.version);
root.render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>
);
  