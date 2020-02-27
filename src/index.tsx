import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { theme } from "./theme";

import "./index.css";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
