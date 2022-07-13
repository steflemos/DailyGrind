import { StyleSheet } from "react-native";


export default StyleSheet.create({

    container:{
        backgroundColor:'#6F8AB7',
        height:'100%',    
    },
    imgControle:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        marginTop: 80

    },
    controle:{
        width:200,
        height:200,
        marginBottom:-30

    },
    TextLogin:{
        fontSize:45,
        fontStyle:"italic",
        fontWeight:"bold",
        color:"#fff",
    },
    containerInputs:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        


    },
    input:{
        width:'70%',
        height:47,
        backgroundColor: '#fff',
        borderTopEndRadius:10,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderBottomEndRadius:10,
        marginTop: 30,
        fontSize: 17,
        fontWeight:"bold",
        borderBottomColor:"#fff",
        paddingLeft: 15

        

    },
    inputSenha:{
        width:'70%',
        height:47,
        backgroundColor: '#fff',
        marginTop:20,
        borderRadius:10,
        fontSize: 17,
        fontWeight:"bold",
        paddingLeft: 15

        

    },
    btnLogin:{
        backgroundColor:'#ACEDFF',
        width:'70%',
        height:47,
        marginTop:20,
        justifyContent: 'center',
        borderRadius:10,
    },
    textBtnLogin:{
        color:'#615D6C',
        fontWeight:"bold",
        fontSize: 17,
        textAlign:"center",
        
    },
    cadastrar:{
        backgroundColor:'#6F8AB7',
        width:'100%',
        marginTop: 3,
        color:'#fff',
        textAlign:"center",
        marginBottom:123,
        fontSize: 17,
        fontWeight:"bold",
        
    },
    icon: {
        position: 'absolute',
        alignItems:'center',
        padding: 13,
        marginTop: 30,
        marginRight:240,
       
      },
      mensagemErro:{
        marginTop:5,
        marginBottom:-15,
        color:'#fff',
        fontWeight:"bold",
        fontSize: 14,
        textAlign:"center",
      },
   
   


}) 