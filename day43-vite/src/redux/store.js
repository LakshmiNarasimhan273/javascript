// in this store file the main part is connection between the action and reducer, we are going 
// to use createStore library from redux, it will connect our action functions into
// reducer logics based on the function type
import {createStore} from "redux";
import { counterReducer } from "./reducer";

// here we are passing our reducer file into the createStore method, for making a connection
const store = createStore(counterReducer);

export default store;