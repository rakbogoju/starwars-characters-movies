import { movieTypes } from './movie-types';
import axios from 'axios';

export const getMovies = () => {
    return (dispatch, getState) => {
        dispatch({
            type: movieTypes.MOVIES_START,
            payload: undefined
        });
        const { characterSelected } = getState().charactersState;
        const characterObj = getState()
            .charactersState
            .characters[parseInt(characterSelected)];
        console.log(characterSelected, characterObj);
        if (!characterObj) {
            dispatch({
                type: movieTypes.MOVIES_ERROR,
                payload: 'No movies exist'
            });
            return;
        }

        const movieApis = characterObj.films;

        if (!movieApis.length) {
            dispatch({
                type: movieTypes.MOVIES_ERROR,
                payload: 'No movies for the selected character'
            })
            return;
        }

        const movieApisAxios = movieApis.map(movie => axios.get(movie))
        axios.all(movieApisAxios)
            .then((data) => {
                if (data instanceof Array && data.length) {
                    // sort by release date to show movies in descending order
                    data.sort((a, b) => (
                        new Date(b.data.release_date) - new Date(a.data.release_date)
                    ));
                    dispatch({
                        type: movieTypes.MOVIES_END,
                        payload: data.map(e => e.data),
                    });
                }
                else {
                    dispatch({
                        type: movieTypes.MOVIES_ERROR,
                        payload: 'Invalid response'
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: movieTypes.MOVIES_ERROR,
                    payload: 'Something went wrong, please try again later.'
                })
            });
    };
}; 