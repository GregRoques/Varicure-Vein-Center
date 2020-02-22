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

// ReactGA.initialize(trackingId1);
// ReactGA.ga("create", trackingId2, "auto", { "name": "trackingId2Ads" });
ReactGA.initialize([{
    trackingId: trackingId1,
    gaOptions: {
        name: "siteTracker"
    }
}, {
    trackingId: trackingId2,
    gaOptions: { name: "adTracker" }
}], { debug: true, alwaysSendToDefaultTracker: false });
history.listen(location => {
    ReactGA.set({
        page: location.pathname
    });
    ReactGA.pageview(location.pathname);
});

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
