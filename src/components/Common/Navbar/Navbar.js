import React from 'react'
import { Link } from 'react-router-dom';

import styles from './Navbar.css'
import logo from '../../../assets/images/Logo.png'

const navBar = (props) => {

    
    
    return (
        <div>
            <div className={styles.nav} data-test="navbarContainer">
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="" />
                </Link>

                <div className={styles.menu} onClick={props.menuClicked}>
                    <div id="top" className={`${styles.top}  ${(props.menuStatus ? styles.changeTop: '')}`}></div>
                    <div id="middle" className={`${styles.middle}  ${(props.menuStatus ? styles.changeMiddle: '')}`}></div>
                    <div id="bottom" className={`${styles.bottom}  ${(props.menuStatus ? styles.changeBottom: '')}`}></div>
                </div>
            </div>
        </div>

    )
}

export default navBar


