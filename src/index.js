import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//themes
import { Default } from "./themes/Default";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Default}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
