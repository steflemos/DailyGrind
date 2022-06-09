import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#6F8AB7'
    },
    viewIntro:{
        alignItems:'center',
        marginTop:-70

    },

    imagemIntro:{
        width:170,
        height:165,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 25,

    },
    titleIntro:{
        marginTop: 55,
        color:'#fff',
        fontSize:44,
        fontWeight:'bold',
    },

    textIntro:{
        color:'#fff',
        justifyContent: 'center',
        alignItems:'center',
        padding: 25,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'

    },
    btnComeçar:{
        backgroundColor:'#91ABD6',
        width:"60%",
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:13,
    },
    TextComeçar:{
        color:'#fff',
        fontSize:25,
    }
})