import React from 'react';
import { StyleProp, Text, TouchableOpacity } from 'react-native';

import styles from './styles';


interface IRandomScrollButtonProps {
    onPress?: any;
}

const RandomScrollButton = (props: IRandomScrollButtonProps): JSX.Element => {
    const { onPress } = props;

    return (
        <TouchableOpacity
            onPress = { onPress }
            style = { styles.randomScrollButton as StyleProp<any> } >
            <Text style = { styles.randomScrollLabel as StyleProp<any> }>
                Random Scroll
            </Text>
        </TouchableOpacity>
    )
};

export default RandomScrollButton;
