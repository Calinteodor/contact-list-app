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
        marginVertical: 16,
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
        paddingTop: 4
    }
};
