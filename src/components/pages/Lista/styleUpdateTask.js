import { StyleSheet } from "react-native";


export default StyleSheet.create({

    container:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        // backgroundColor:'#000'
    },
    ViewInputs:{
        justifyContent:'space-between',
    },

    input:{
        width:'90%',
        height:60,
        backgroundColor: '#D9D9D9',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        fontSize: 17,
        fontWeight:"bold",
        paddingLeft: 15
    },
    inputXP:{
        width:'90%',
        height:60,
        backgroundColor: '#D9D9D9',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        fontSize: 17,
        fontWeight:"bold",
        marginTop:25,
        paddingLeft: 15
    },
    btnSalvar:{
        width:'60%',
        height:53,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#4A4848',
        borderRadius:30,
        marginTop:40,
    },
    textSalvar:{
        fontSize:24,
        fontWeight:'bold',
        color:'#D9D9D9'
    },
})