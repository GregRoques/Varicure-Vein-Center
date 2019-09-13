import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducer from "./Redux/RootReducers";
import { createBrowserHistory } from "history";

// need to eventually add ReactGA for Google Analytics tracking

const history = createBrowserHistory();

const theStore = createStore(
    RootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={ theStore }>
        <Router history={ history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
