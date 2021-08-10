import {createStore} from "redux";
import {applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./reducer/rootReducer";


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))