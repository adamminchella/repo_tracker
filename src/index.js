import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Favicon from 'react-favicon'

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Favicon url="../assets/images/favicon.png" />
    <App />
  </Router>
);
