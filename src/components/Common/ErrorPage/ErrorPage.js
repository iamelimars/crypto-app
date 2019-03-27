import React from 'react';
import styles from './ErrorPage.css'

const errorPage = () => (
    <div className={styles.page} data-test="errorContainer">
        <h1>Error Loading Content</h1>
        <h2>Sorry............</h2>
        <a href="/">Back To Home</a>
    </div>
)

export default errorPage;