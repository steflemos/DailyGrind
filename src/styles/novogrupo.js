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
        height:280,
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
        borderWidth:0.5,
        borderRadius:10
    },
    inputEmail:{
        width:'83%',
        height:25,
       
            
    },
    viewBtn:{
        alignSelf: "flex-end",
        alignItems:'flex-end',
      },
      btnAdd:{
      backgroundColor:'#ACEDFF',
      width:40,
      height:40,
      alignItems:'center',
      justifyContent:'center',
      marginRight:10,
      marginTop:-37,
      borderRadius:100,
      },
      urgenteMedia:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:25,
        marginLeft:22
    },
    urgenteMedia:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:25,
        marginLeft:22
    },
    
    urgente:{
        flexDirection:'row',
        width:130,
        marginTop:10,
        
    
    },
    
    medio:{    
        flexDirection:'row',
        width:130,
        marginTop:10,
    },

    botao:{
        width:40,
        height:40,
        backgroundColor:'#FFF',
        borderRadius:40,
        alignSelf: "center",
        alignItems:'center',
    },
    botao2:{
        width:40,
        height:40,
        backgroundColor:'#fFF',
        borderRadius:40
    },
    texto:{
        paddingLeft:15,
        fontWeight:"bold",
        color:'#FFF',
        fontSize:17,
       marginTop:20,
        
    },
    viewBtnCancel:{
        alignSelf: "flex-end",
        alignItems:'flex-end',
      },
      btnAddCancel:{
      backgroundColor:'#fFF',
      width:40,
      height:40,
      alignItems:'center',
      justifyContent:'center',
      marginRight:10,
      marginTop:-37,
      borderRadius:100,
      },



})