import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    ViewStyle: {
        backgroundColor: "#dbdbdb",
        width: 300,
        height: 270,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: "15%",
        marginTop: '10%',
        flexDirection: 'column'
    },

    ViewStyle1 : {
        alignSelf: 'center',
        height: 40,
        width: "84%",
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: "20%",
        paddingLeft: 10,
        flexDirection: "row"
    },
    ViewStyle2 : {
        alignSelf: 'center',
        height: 40,
        width: "84%",
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 30,
        paddingLeft: 10,
        flexDirection: "row"
    },
    TextStyle1 : {
        flex: 1,
        color: 'black'
    },
    TextStyle2 : {
        flex: 1,
        color: 'black'
    },
    TextStyle4 : {
        flex: 1,
        alignSelf: 'center',
        marginTop: 12,
        color: '#d4d4d4',
        fontSize: 20,
        fontWeight: '800'
    },

    TextStyle3 : {
        marginTop: 25,
        marginRight: "8%",
        alignSelf: 'flex-end',
    },

    ButtonStyle : {
        backgroundColor: "#51AD28",
        width: "70%",
        height: "45%",
        borderRadius: 25,
        justifyContent: 'flex-end',
    },

    ButtonViewStyle : {
        zIndex: 2, 
        marginTop: "15%", 
        alignItems: 'center', 
        position: 'absolute', 
        width: 270, 
        height: 100, 
        top: 200, 
        left: 15
    },

    IconStyle : {
        color: "gray", 
        marginRight: 10, 
        alignSelf: "center"
    }
});