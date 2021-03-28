import React from "react";
import ReactDOM from "react-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

import App from "App";
import "assets/css/loadingPage.css";
import ThemeContextProvider from "ThemeContext/ThemeContext";
// others

ReactDOM.render(
  <>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </>,
  document.getElementById("root")
);
