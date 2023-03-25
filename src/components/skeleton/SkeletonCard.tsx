import React from 'react';
import {
    StyleProp,
    View
} from 'react-native';

import Skeleton from './Skeleton';

import styles from './styles';


const SkeletonCard = (): JSX.Element => {
    return (
        <View
            style = { [
                styles.skeletonCardContainer as StyleProp<any>,
                styles.elevation
            ] }>
            <Skeleton
                height = { 64 }
                style = { styles.skeletonCardAvatar as StyleProp<any> }
                width = { 64 }
                variant = { 'circle' } />
            <View>
                <View style = { styles.skeletonCardNameContainer as StyleProp<any> }>
                    <Skeleton
                        height = { 16 }
                        width = { 60 }
                        variant = { 'box' } />
                    <Skeleton
                        height = { 16 }
                        style = { styles.skeletonCardName as StyleProp<any> }
                        width = { 60 }
                        variant = { 'box' } />
                </View>
                <Skeleton
                    height = { 16 }
                    style = { styles.skeletonCardEmail as StyleProp<any> }
                    width = { 184 }
                    variant = { 'box' } />
            </View>
        </View>
    )
};

export default SkeletonCard;
