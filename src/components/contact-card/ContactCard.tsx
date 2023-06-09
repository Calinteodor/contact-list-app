import React, {ForwardedRef, forwardRef, useCallback, useState} from 'react';
import {
    StyleProp,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Avatar from '../avatar/Avatar';

import ContactCardModal from './ContactCardModal';

import styles from './styles';


interface IContactCardProps {
    address?: any;
    email?: string;
    employment?: any;
    isViewAble?: boolean;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    ref?: ForwardedRef<any>;
    source?: any;
}

const ContactCard = forwardRef((props: IContactCardProps, ref: ForwardedRef<any>): JSX.Element => {
    const { address, email, employment, firstName, lastName, phoneNumber, source } = props;
    const [ cardModalVisibility, setCardModalVisibility ] = useState(false);

    const onLongPress = useCallback(() => {
        setCardModalVisibility(true);
    }, [ cardModalVisibility ])

    return (
        <>
            <TouchableOpacity
                onLongPress = { onLongPress }
                ref = { ref }
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
                    <Text
                        numberOfLines = { 1 }
                        style = { styles.contactCardEmailText }>
                        { email }
                    </Text>
                </View>
            </TouchableOpacity>

            {
                cardModalVisibility &&
                <ContactCardModal
                    address = { address }
                    employment = { employment }
                    onRequestClose = {() => setCardModalVisibility(false)}
                    phoneNumber = { phoneNumber }
                    visible={ cardModalVisibility} />
            }
        </>
    )
});

export default ContactCard;
