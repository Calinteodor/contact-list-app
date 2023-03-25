export default {

    contactCardContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
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
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.8,
        shadowRadius: 16,

        elevation: 24,
    },

    contactCardDetailsContainer: {
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
        paddingLeft: 8
    },

    contactCardEmailText: {
        paddingTop: 4
    }
};
