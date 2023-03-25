import React, { useCallback } from 'react';
import {
    Image,
    View
} from 'react-native';

import styles from './styles';


interface IAvatarProps {
    source?: any;
    testID?: string;
}

const Avatar = (props: IAvatarProps): JSX.Element => {
    const { source, testID } = props;
    const localSource = '../../images/avatar.png';

    const imageSource = source ? source : require(localSource);

    //Shows local image avatar if there are errors with the source
    const onError = useCallback((e: any) => {
        e.target.source = localSource;
    }, [])


    return (
        <View style = { styles.avatarContainer }>
            <Image
                alt = 'avatar'
                onError = { onError }
                source = { imageSource }
                style = { styles.avatar}
                testID = { testID } />
        </View>
    )
};

export default Avatar;
