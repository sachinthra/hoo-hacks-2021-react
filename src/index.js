import React from "react";
import ReactDOM from "react-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

import App from "App";
import ThemeContextProvider from "ThemeContext/ThemeContext";
import CommentContextProvider from "ThemeContext/CommentContext";
// others

ReactDOM.render(
  <>
    <ThemeContextProvider>
      {/* <CommentContextProvider> */}
      <App />
      {/* </CommentContextProvider> */}
    </ThemeContextProvider>
  </>,
  document.getElementById("root")
);
