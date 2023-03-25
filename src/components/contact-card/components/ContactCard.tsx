import React from 'react';
import {
    StyleProp,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Avatar from '../../avatar/components/Avatar';

import styles from '../styles';


interface IContactCardProps {
    email?: string;
    firstName?: string;
    lastName?: string;
    onLongPress?: any;
    source?: any;
}

const ContactCard = (props: IContactCardProps) => {
    const { email, firstName, lastName, onLongPress, source } = props;

    return (
        <TouchableOpacity
            onLongPress = { onLongPress }
            style = { [
            styles.contactCardContainer as StyleProp<any>,
            styles.elevation
        ] }>
            <Avatar source = { source } />
            <View>
                <View style = { styles.contactCardNameContainer as StyleProp<any> }>
                    <Text style = { styles.contactCardFNameText as StyleProp<any> }>
                        { firstName }
                    </Text>
                    <Text style = { styles.contactCardLNameText as StyleProp<any> }>
                        { lastName }
                    </Text>
                </View>
                <Text style = { styles.contactCardEmailText }>
                    { email }
                </Text>
            </View>
        </TouchableOpacity>
    )
};

export default ContactCard;
