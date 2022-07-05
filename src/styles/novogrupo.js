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
        height:185,
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
        marginLeft:15,
        marginTop:7
    },
    ViewImput:{
        alignItems:'center'
    },
    inputEmail:{
        width:'95%',
        height:30,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowRadius:5,
        shadowColor:'#333'
    }




})