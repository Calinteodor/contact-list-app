export default {

    skeletonContainer: {
        backgroundColor: '#a0a0a0'
    },

    skeletonCardContainer: {
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
        shadowColor: "#a0a0a0",
        shadowOffset: {
            height: -18,
            width: 16
        },
        shadowOpacity: 0.8,
        shadowRadius: 8,

        elevation: 24
    },

    skeletonCardAvatar: {
        margin: 24
    },

    skeletonCardNameContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'space-between'
    },

    skeletonCardName: {
        marginLeft: 4
    },

    skeletonCardEmail: {
        marginTop: 4
    }
};
