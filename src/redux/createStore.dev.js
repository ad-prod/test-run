import { createStore, applyMiddleware, compose } from "redux";
import { reduxReactRouter } from "redux-router";
import { createBrowserHistory } from "history";
import thunkMiddleware from "redux-thunk";
import apiMiddleware from "./middlewares/api";
import routes from "../routes";
import reducer from "./reducer";
import * as swapi from "../helpers/swapi";

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, apiMiddleware(swapi)),
  reduxReactRouter({ routes, createBrowserHistory })
)(createStore);

export default function () {
  const store = finalCreateStore(reducer);
  return store;
}
