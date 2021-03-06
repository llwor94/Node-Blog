import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import App from './App';
import rootReducer from "./reducers";
import { injectGlobal } from 'styled-components';
import { BrowserRouter as Router } from "react-router-dom";

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };
  html, body, #root {
    width: 100%;
  }
`
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);