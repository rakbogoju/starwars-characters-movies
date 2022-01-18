import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getCharacters, setCharacterSelected } from '../../redux/actions/characters';
import { Spinner, Alert } from 'react-bootstrap';
import styles from './character.module.css';

const CharacterDropDown = ({
    charactersState,
    getCharacters,
    setCharacterSelected
}) => {

    const { characters, loading, error } = charactersState;

    useEffect(() => {
        getCharacters();
    }, []);

    const onCharSelect = (evt) => {
        if (evt.target.value) {
            setCharacterSelected(evt.target.value);
        }
    }
    return (
        <div className={styles.characters}>
            {loading ? <Spinner animation="border" variant="primary" />
                : error ? <Alert variant="warning">
                    {error}
                </Alert>
                    : characters.length ?
                        <div>
                            <select className='custom-select'
                                onChange={onCharSelect}
                            >
                                <option value="" disabled selected>Select a character...</option>
                                {characters.map((character, idx) => (
                                    <option value={idx}>{character.name}</option>
                                ))}
                            </select>
                        </div>
                        : <div> No Characters to display</div>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        charactersState: state.charactersState
    };
};

export default connect(
    mapStateToProps,
    {
        getCharacters,
        setCharacterSelected
    })(CharacterDropDown);


