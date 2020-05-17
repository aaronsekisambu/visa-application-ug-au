import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
