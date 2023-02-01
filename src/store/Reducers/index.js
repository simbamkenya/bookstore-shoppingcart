import { combineReducers } from "redux";
import { cartReducer} from "./cartReducer";
import { booksReducer } from "./booksReducer"

const reducers = combineReducers({
    Test: cartReducer,
    books: booksReducer
});

export default reducers;