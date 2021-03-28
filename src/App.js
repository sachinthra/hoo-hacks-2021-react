import Router from "components/router/Router";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const supportHistory = "pushState" in window.history;
  return (
    <BrowserRouter forceRefresh={!supportHistory}>
      <Router />
    </BrowserRouter>
  );
}

export default App;
