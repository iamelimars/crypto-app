import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.css'

const errorPage = () => (
    <div className={styles.page}>
        <h1>Error Loading Content</h1>
        <h2>Check yout internet connection............</h2>
        <a href="/">Back To Home</a>
    </div>
)

export default errorPage;