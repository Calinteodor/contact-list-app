export default {

    contactCardContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        height: 120,
        justifyItems: 'space-between',
        margin: 32,
        width: 320
    },

    elevation: {
        shadowColor: "red",
        shadowOffset: {
            height: -18,
            width: 16
        },
        shadowOpacity: 0.8,
        shadowRadius: 8,

        elevation: 24
    },

    contactCardNameContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'space-between'
    },

    contactCardFNameText: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    contactCardLNameText: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 4
    },

    contactCardEmailText: {
        paddingTop: 4,
        width: 184
    },

    centeredView: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    contactCardInfoModalContainer: {
        backgroundColor: 'white',
        elevation: 4,
        margin: 24,
        padding: 32,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },

    contactCardInfoText: {
        fontSize: 14,
        fontWeight: 'normal',
        paddingVertical: 8
    },

    closeContactCardInfoModalButton: {
        alignSelf: 'center',
        backgroundColor: '#0045B3',
        borderRadius: 4,
        elevation: 2,
        height: 40,
        justifyContent: 'center',
        marginTop: 16,
        width: 144
    },

    closeContactCardInfoModalLabel: {
        alignSelf: 'center',
        color: 'white'
    },
};
