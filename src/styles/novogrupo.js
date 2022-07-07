import { StyleSheet } from "react-native";


export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#6F8AB7",
        paddingTop:15,
        width:'100%'
        
    },
    header:{
      flexDirection:'row',
      justifyContent:'center',
      width:'100%',
      height:85,
      alignItems:"center",
      borderBottomColor: "#FFF",
      borderBottomWidth: 1,
    },
    
    
    titulo:{
      color:"#fff",
      fontWeight:"bold",
      fontSize:35,
      marginTop:10,
      alignItems: 'center',
      justifyContent:'center'
    },
   
    inputs:{
        justifyContent:"center",
        alignItems:"center"
    },
    name:{
        marginTop: 20,
        width:'95%',
        height:55,
        borderRadius:5,
        backgroundColor:'#fff',
        paddingBottom:25,
        paddingLeft:5,
        fontWeight:"bold",
        fontSize:17,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowRadius:5,
        shadowColor:'#333',
    },

    imputName:{
        color:'#000',
        fontSize:17,
        width:'100%',
        height:70,
        
    },

    textname:{
        paddingLeft:5,
        fontWeight:"bold",
        color:'#615d6c',
        fontSize:17,
        marginTop:5,
    },
    data:{
        width:350,
        height: 350
    },
    
    main:{
        justifyContent:"center",
    },
    viewAdd:{
        alignItems:'center',
    },
    viewPrioridade:{
        marginTop: 20,
        width:'95%',
        height:355,
        borderRadius:5,
        backgroundColor:'#fff',
        paddingBottom:25,
        fontSize:17,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowRadius:5,
        shadowColor:'#333'
        
     
    },
    textAdd:{
        textAlign:'center',
        paddingLeft:5,
        fontWeight:"bold",
        color:'#615d6c',
        fontSize:17,
        marginTop:5,
    },
    TextEmail:{
        fontWeight:"bold",
        color:'#878294',
        fontSize:14,
        marginLeft:8,
        marginTop:5
    },
    ViewImput:{
        marginLeft:10,
    },
    ViewAddParticipante:{
        marginTop:5,
        width:'95%',
        height:60,
        borderBottomWidth:0.5,
        borderBottomRadius:10,
        borderBottomColor:'#615d6c',
    },
    inputEmail:{
        width:'80%',
        height:28,
        alignItems:"center",
        fontSize:17,
        fontWeight:"bold",
        color:'#615d6c',
       
            
    },
    viewBtn:{
        alignSelf: "flex-end",
      },
    meio:{
        alignItems:"center"
      },
      btnAdd:{
      backgroundColor:'#d4d4d4',
      width:35,
      height:35,
      alignItems:'center',
      justifyContent:'center',
      marginRight:10,
      marginTop:-38,
      borderRadius:100,
      },

      texto:{
        paddingLeft:15,
        fontWeight:"bold",
        color:'#fff',
        fontSize:17,
       marginTop:10,
        
    },
    
      cancelAdd:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:25,
        marginLeft:22
      },

      cancelar:{
        flexDirection:'row',
        width:130,
        marginTop:15
      },

      salvar:{
        flexDirection:'row',
        width:130,
        marginTop:15
      },

      botao1:{
        width:40,
        height:40,
        backgroundColor:'#FFf',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40,
    },
      botao2:{
        width:40,
        height:40,
        backgroundColor:'#FFf',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40,
    },
})