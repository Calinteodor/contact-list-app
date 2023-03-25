import React from 'react';
import { Modal, StyleProp, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';


interface IContactCardModalProps {
    address?: any;
    employment?: any;
    onRequestClose: any;
    phoneNumber?: string;
    visible: boolean;
}

const ContactCardModal = (props: IContactCardModalProps): JSX.Element => {
    const { address: {
        country,
        city,
        street_address,
        street_name,
        state,
        zip_code
    }, employment, onRequestClose, phoneNumber, visible } = props;

    return (
        <View style = { styles.centeredView as StyleProp<any> }>
            <Modal
                animationType = 'fade'
                transparent = { true }
                visible = { visible }
                onRequestClose = { onRequestClose }>
                <View style = { styles.centeredView as StyleProp<any> }>
                    <View style = { styles.contactCardInfoModalContainer as StyleProp<any> }>
                        <Text style = { styles.contactCardInfoText as StyleProp<any> }>
                            <Text style={{fontWeight: "bold"}}>Address:</Text> { city }, { street_name }, { street_address }, { zip_code }, { state }, { country }
                        </Text>
                        <Text style = { styles.contactCardInfoText as StyleProp<any> }>
                            <Text style={{fontWeight: "bold"}}>Phone:</Text> { phoneNumber }
                        </Text>
                        <Text style = { styles.contactCardInfoText as StyleProp<any> }>
                            <Text style={{fontWeight: "bold"}}>Title:</Text> { employment?.title }
                        </Text>
                        <TouchableOpacity
                            onPress = { onRequestClose }
                            style = { styles.closeContactCardInfoModalButton as StyleProp<any> } >
                            <Text style = { styles.closeContactCardInfoModalLabel as StyleProp<any> }>
                                Close
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
};

export default ContactCardModal;
