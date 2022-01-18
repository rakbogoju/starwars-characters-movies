import { combineReducers } from "redux";
import { moviesReducer } from './movies';
import { charactersReducer } from './characters';

export default combineReducers({
    moviesState: moviesReducer,
    charactersState: charactersReducer,
});
