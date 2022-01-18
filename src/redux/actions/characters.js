
import { characterTypes } from './character-types';
import axios from 'axios';

export const setCharacterSelected = (character) => {
    return (dispatch) => {
        dispatch({
            type: characterTypes.SET_CHARACTER_SELECTED,
            payload: character
        });
    };
};

export const getCharacters = () => {
    return (dispatch) => {
        dispatch({
            type: characterTypes.CHARACTER_START,
            payload: undefined
        });
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/people`)
            .then(res => {
                let characters = res.data.results;
                dispatch({
                    type: characterTypes.CHARACTER_END,
                    payload: characters
                });
            })
            .catch(err => {
                dispatch({
                    type: characterTypes.CHARACTER_ERROR,
                    payload: 'Error fetching characters'
                });
            })
    };
};
