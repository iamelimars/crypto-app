import React, { Component } from 'react'
import anime from 'animejs'
import styles from './Hero.css'

import Ticker from '../../../containers/CryptoStream/CryptoStream'





class Hero extends Component {

    componentDidMount() {


        anime({
            targets: ' #svg_4',
            d: 'm-2,-110.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-139.92534,-24.11052 -264.85068,196.11055 -641.77607,0l0,-296.80101z',
            easing: 'easeInOutQuad',
            duration: 10000,
            loop: true,
            direction: 'alternate'
        });

        anime({
            targets: ' #svg_3',
            d: 'm-2,-110.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-139.92534,-24.11052 -264.85068,196.11055 -641.77607,0l0,-296.80101z',
            easing: 'easeInOutQuad',
            duration: 7000,
            loop: true,
            direction: 'alternate'
        });
        anime({
            targets: ' #svg_2',
            d: 'm-2,-110.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-139.92534,-24.11052 -264.85068,196.11055 -641.77607,0l0,-296.80101z',
            easing: 'easeInOutQuad',
            duration: 4000,
            loop: true,
            direction: 'alternate'
        });

        anime({
            targets: '.sub',
            value: 75,
            round: 1,
            easing: 'easeInOutExpo'
        });
    }

    

    render() {
        return (
            <div className={styles.hero}>
                

                <Ticker />


                <svg className={styles.svg} width="600" height="280" viewBox="0 0 600 280" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" svg="http://www.w3.org/2000/svg">
                    <g>
                        <path id="svg_4" d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z" fill="#fff" />
                    </g>
                </svg>
                <svg className={styles.svg} width="600" height="280" viewBox="0 0 600 280" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" svg="http://www.w3.org/2000/svg">
                    <g>
                        <path id="svg_3" d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z" fill="#fff" />
                    </g>
                </svg>
                <svg className={styles.svg} width="600" height="280" viewBox="0 0 600 280" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" svg="http://www.w3.org/2000/svg">
                    <g>
                        <path id="svg_2" d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z" fill="#fff" />
                    </g>
                </svg>
            </div >
        )
    }
}



export default Hero