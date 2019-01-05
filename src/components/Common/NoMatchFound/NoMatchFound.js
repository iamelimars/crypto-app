import React from 'react';
import styles from './NoMatchFound.css';
import { Link } from 'react-router-dom';


const NoMatchFound = () => {
    return (
        <div className={styles.not_found}>
            <h1>404</h1>
            <h2>Errorrrrrrrrrrrrr</h2>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default NoMatchFound