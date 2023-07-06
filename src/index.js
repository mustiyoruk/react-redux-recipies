import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "./app/App.js";
import { store } from "./app/store.js";

//react-redux library eliminates render function, props drilling of state.getSate() and state.dispatch in App

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
