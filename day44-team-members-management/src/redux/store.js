import {createStore} from "redux";
import { memberReducer } from "./reducer";

const store = createStore(memberReducer);

export default store;