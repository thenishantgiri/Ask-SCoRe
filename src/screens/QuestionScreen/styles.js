import { StyleSheet } from 'react-native';
import { COLOR_LIGHT_SECONDARY, COLOR_LIGHT_PRIMARY} from '../../config/styles';

export default StyleSheet.create({
    HeaderStyle : {
        fontSize: 30,
        flex: 1,
        marginLeft: 10, 
        marginTop: 5
    },

    ImageView : {
        width: 55,
        height: 55,
        marginHorizontal: 5
    },

    HeaderStyle1 : {
        flexDirection: 'row',    
    },

    DividerView : {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom:3,
        marginHorizontal: 10
    },
    
    AskButtonStyle1 : {
        width: 60,
        height: 30,
        backgroundColor: COLOR_LIGHT_PRIMARY,
        borderRadius: 10,
        right:20,
        alignSelf:'flex-end',
        justifyContent: 'center',
        marginTop: 7,
        marginLeft: 18
    },

    AskButtonStyle : {
        width: 60,
        height: 30,
        backgroundColor: COLOR_LIGHT_PRIMARY,
        borderRadius: 10,
        right: 10,
        justifyContent: 'center',
        marginTop: 7
    },

    QuestionStyle : {
        width : "90%",
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: Platform.OS === 'ios' ? '#fff' : null,
        borderColor: '#b8b8b8',
        shadowColor: Platform.OS === 'ios' ? '#000000' : '#000000',
        shadowOffset: {
        width: Platform.OS === 'ios' ? 0 : 0,
        height: Platform.OS === 'ios' ? 2 : 2,
        },
        shadowOpacity: Platform.OS === 'ios' ? 0.9 : 0.8,
        shadowRadius: Platform.OS === 'ios' ? 3 : 40,
        elevation: Platform.OS === 'ios' ? 3 : 4,
        alignSelf: 'center'
    },

    nameHeadlineStyle : {
        width: "101%",
        paddingVertical: 3,
        backgroundColor: COLOR_LIGHT_SECONDARY,
        borderRadius: 7,
        alignSelf: 'center',
        justifyContent: 'center',
        top: 0
    },
    AskButtonStyle2 : {
        alignSelf:'flex-end',
        justifyContent: 'center',
        marginTop: 7,
        flexDirection: 'row'
    },

    DoneStyle : {
        color: "black", 
        fontWeight: '500', 
        textAlign: 'center', 
        fontSize: 16 
    },

    ViewStyle : {
        backgroundColor:'white', 
        borderRadius:10, 
        minHeight: 80, 
        marginBottom: 10
    },

    TextInputStyle : {
        padding: 10, 
        fontSize: 13, 
        width: "90%", 
        color: 'black' 
    },

    ImageStyle : {
        height: 100, 
        aspectRatio: 1, 
        alignSelf: 'center', 
        borderRadius: 10
    },

    ProgressBarStyle : {
        alignSelf: 'flex-start', 
        marginTop: 18, 
        marginRight: "5%"
    },

    IconStyle : {
        color: "black", 
        marginRight: 10, 
        alignSelf: "flex-end" 
    },

    PostTextStyle : {
        color: "black", 
        fontWeight: '500', 
        textAlign: 'center', 
        fontSize: 16 
    }
});