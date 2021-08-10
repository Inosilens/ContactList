import {combineReducers} from "redux";
import {contactListReducer} from "./contactListReducer";
import {changePersonReducer} from "./changePersonReducer";


export const rootReducer = combineReducers({
     contacts : contactListReducer,
     change : changePersonReducer

})