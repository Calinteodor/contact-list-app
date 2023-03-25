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
}

const ContactCard = (props: IContactCardProps) => {
    return (
        <TouchableOpacity
            style = { [
            styles.contactCardContainer as StyleProp<any>,
            styles.elevation
        ] }>
            <Avatar />
            <View style = { styles.contactCardDetailsContainer as StyleProp<any> }>
                <View style = { styles.contactCardNameContainer as StyleProp<any> }>
                    <Text style = { styles.contactCardFNameText as StyleProp<any> }>
                        First Name
                    </Text>
                    <Text style = { styles.contactCardLNameText as StyleProp<any> }>
                        Last Name
                    </Text>
                </View>
                <Text style = { styles.contactCardEmailText }>
                    Email
                </Text>
            </View>
        </TouchableOpacity>
    )
};

export default ContactCard;
