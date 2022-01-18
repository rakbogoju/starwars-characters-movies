import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getMovies } from '../../redux/actions/movies';
import Movie from './movie-card';
import { Spinner, Alert } from 'react-bootstrap';
import styles from './movies.module.css';

const Movies = ({
    characterSelected,
    moviesState,
    getMovies,
}) => {
    const { movies, loading, error } = moviesState;

    useEffect(() => {
        if (characterSelected) {
            getMovies();
        }
    }, [characterSelected]);

    return (
        <div className={styles.movies}>
            {loading ? <div style={{
                textAlign: 'center'
            }}><Spinner animation="border" variant="primary" />
            </div>
                : error ? <Alert variant="warning">
                    {error}
                </Alert>
                    : movies.length &&
                        <>
                            <div className={styles.movieList}>
                                {movies.map((e, i) => (
                                    <Movie {...e} recent={i === 0 ? true : false}  />
                                ))}
                            </div>
                        </>
                        }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        characterSelected: state.charactersState.characterSelected,
        moviesState: state.moviesState
    }
}

export default connect(
    mapStateToProps, 
    { getMovies })(Movies);
