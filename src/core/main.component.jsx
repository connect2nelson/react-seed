require('normalize.css');

import {
    moduleTitle
} from './styles/someModule.scss';
import styles from './styles/core.css';
import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={moduleTitle}>Seed React Project</h1>
                {this.props.children}
            </div>
        )
    }
}

Main.propTypes = {
    children: React.PropTypes.object
}

export default Main;
