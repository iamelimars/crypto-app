import React, { Component } from 'react';
import styles from './Loading.css';

import anime from 'animejs';

class Loading extends Component {
    constructor() {
        super();

        this.redRef = React.createRef();
    }

    componentDidMount() {
        this.animeRef = anime({
            targets: '#el',
            backgroundColor: [
                { value: '#8F7BE5' },
                { value: '#B87BD9' },
                { value: '#FA75B1' }
            ],
            delay: function (el, i, l) {
                return i * 80;
            },
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad'
        })
    }

    render() {
        return (
            <div className={styles.page}>
                <div className={styles.center}>
                    <div id="el" className={styles.element} ref={this.redRef} />
                    <div id="el" className={styles.element} />
                    <div id="el" className={styles.element} />
                    <div id="el" className={styles.element} />
                </div>

            </div>
        )
    }

}

export default Loading