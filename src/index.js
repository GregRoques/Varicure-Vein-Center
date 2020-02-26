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
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

import TagManager from "react-gtm-module";
import { gtmId, trackingId1, trackingId2 } from "./Aux/trackingIDs";

const history = createBrowserHistory();

ReactGA.initialize(trackingId1);
history.listen(location => {
    ReactGA.set({
        page: location.pathname
    });
    ReactGA.pageview(location.pathname);
});

ReactGA.initialize(trackingId2);

const tagManagerArgs = {
    gtmId: gtmId
};
TagManager.initialize(tagManagerArgs);

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
