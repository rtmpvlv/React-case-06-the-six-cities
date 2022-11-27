import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducer} from "./store/reducer";
import App from "./components/app/app";
import {ActionCreator} from "./store/action";
import {checkLogin} from "./store/api-actions";
import {AuthorizationStatus} from "./constants";

const api = createAPI(() =>
  store.dispatch(
      ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH)
  )
);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(checkLogin());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
