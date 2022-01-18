import { characterTypes } from '../actions/character-types';

export const charactersReducer = (state = {
    characterSelected: '',
    characters: [],
    loading: false,
    error: undefined,
}, action) => {
    switch (action.type) {
        case characterTypes.SET_CHARACTER_SELECTED:
            return {
                ...state,
                characterSelected: action.payload
            };
        case characterTypes.CHARACTER_START:
            return {
                ...state,
                loading: true,
                characters: [],
                error: undefined
            };
        case characterTypes.CHARACTER_END:
            return {
                ...state,
                loading: false,
                characters: action.payload,
                error: undefined
            };
        case characterTypes.CHARACTER_ERROR:
            return {
                ...state,
                loading: false,
                characters: [],
                error: action.payload
            };
        default:
            return state;
    }
};