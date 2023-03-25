import React, {useEffect, useRef} from 'react';
import {
    Animated,
    StyleProp
} from 'react-native';

import styles from './styles';


interface ISkeletonProps {
    height: number;
    style?: any;
    width: number;
    variant: 'box' | 'circle';
}

const Skeleton = (props: ISkeletonProps): JSX.Element => {
    const { height, style, width, variant } = props;
    const opacity = useRef(new Animated.Value(0.3));

    let borderRadius = 0;

    if(variant === 'circle') {
        borderRadius = height / 2;
    }

    useEffect(() => {
        Animated.loop(Animated.sequence([
            Animated.timing(opacity.current, {
                toValue: 1,
                useNativeDriver: true,
                duration: 500
            }),
            Animated.timing(opacity.current, {
                toValue: 0.3,
                useNativeDriver: true,
                duration: 800
            })
        ])).start();
    }, [ opacity ])

    return (
        <Animated.View
            style = {[
                styles.skeletonContainer as StyleProp<any>,
                {
                    borderRadius,
                    height,
                    opacity: opacity.current,
                    width
                },
                style
            ]}>
        </Animated.View>
    )
};

export default Skeleton;
