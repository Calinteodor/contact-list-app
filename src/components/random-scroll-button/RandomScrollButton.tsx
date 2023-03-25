import React from 'react';
import { Button } from 'react-native';

import styles


const RandomScrollButton = () => {
    return (
        <Button
            color = '#f194ff'
            style = { styles.randomScrollButton }
            title = 'Press to scroll' />
    )
};

export default RandomScrollButton;
