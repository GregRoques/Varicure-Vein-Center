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

// import ReactGA from "react-ga";
// import { trackingId } from "./Aux/trackingIDs";

// import TagManager from "react-gtm-module";
// import { gtmId } from "./Aux/trackingIDs";

const history = createBrowserHistory();
// ReactGA.initialize(trackingId);
// history.listen(location => {
//     ReactGA.set({
//         page: location.pathname
//     });
//     ReactGA.pageview(location.pathname);
// }); // analytics

// const tagManagerArgs = {
//     gtmId: gtmId
// }
// TagManager.initialize(tagManagerArgs) // tag manager

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
