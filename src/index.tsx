import * as React from "react";
import {createStore, applyMiddleware} from "redux";
import { render } from "react-dom";
import "./styles/style.scss";
import Router from "../src/routes";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import {reducer} from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
const rootElement: HTMLElement = document.getElementById("root");

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Router />
  </Provider>
  ,
  rootElement
);
