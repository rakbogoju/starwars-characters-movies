import React from 'react';
import styles from './banner.module.css';

const Banner = () => {

    return (
        <div className={styles.banner}>
            <span className={styles.title}>STAR WARS</span>
            <span className={styles.description}>Please choose your favorite character from STAR WARS to see their movie list</span>
        </div>
    );
}

export default Banner;