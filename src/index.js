import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOM API for rendering
import App from "./App"; // Your main App component
import "./index.css"; // Optional global styles

const root = ReactDOM.createRoot(document.getElementById("root")); // Connect to <div id="root">
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
