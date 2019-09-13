import { combineReducers } from "redux";

import auth from "./Reducers/Auth";

const RootReducer = combineReducers({
    auth
});

export default RootReducer;
