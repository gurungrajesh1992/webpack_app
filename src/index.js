import React from "react";
import ReactDOM from "react-dom";
// import { ReactDOM } from "react";

import App from "./app";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
