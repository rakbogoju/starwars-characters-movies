import { movieTypes } from '../actions/movie-types';

export const moviesReducer = (state = {
    movies: [],
    loading: false,
    error: undefined,
}, action) => {
    switch (action.type) {
        case movieTypes.MOVIES_START:
            return {
                ...state,
                loading: true,
                movies: [],
                error: undefined
            };
        case movieTypes.MOVIES_END:
            return {
                ...state,
                loading: false,
                movies: action.payload,
                error: undefined
            };
        case movieTypes.MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                movies: [],
                error: action.payload
            };
        default:
            return state;
    }
};