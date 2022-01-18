import React from 'react';
import styles from './movies.module.css';
import StarWarsLogo from './Star-wars-logo.jpg';
import { Badge } from 'react-bootstrap';

const Movie = ({
    title,
    opening_crawl,
    release_date,
    director,
    producer,
    recent }) => {
    return (
        <div className={styles.movieCard}>
            <div className="card" style={{
                "width": "100%",
                "background": recent ? "#2b2002" : "#FFF",
                "color": recent ? "#FFF" : "black"
            }}>
                <div className="row">
                    <div className="col-sm-3" style={{ margin: 'auto' }}>
                        <img className="card-img" src={StarWarsLogo} />
                    </div>
                    <div className="col-sm-9" >
                        <div className="card-body">
                            <div className={styles.movieTitle}>
                                <h5 className="card-title">{title}</h5>
                                {recent && <div><Badge bg="info">Most Recent</Badge></div>}
                            </div>
                            <p className={styles.cardCrawl}>{opening_crawl}</p>
                            <div className={styles.cardInfo}>
                                <span><b>Release Date</b>: {release_date}</span>
                                <span><b>Directed By</b>: {director}</span>
                                <span><b>Produced By</b>: {producer}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {recent && <hr />}
        </div>
    )
}

export default Movie;