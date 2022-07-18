import { StyleSheet } from "react-native";


export default StyleSheet.create({

container:{
    flex:1,
    backgroundColor:"#6F8AB7",
    paddingTop:15
},
header:{
  flexDirection: "row",
  justifyContent:"space-between",
  width:'100%',
  height:70,
  alignItems:"center",
  borderBottomColor: "#fff",
  borderBottomWidth: 1,
},
controleIndex:{
  height:45,
  width:45,
 
},
btnControle:{
marginLeft:'10%',
},

stars:{
  height:20,
  width:20,
},
up:{
  height:20,
  width:20,
},
viewXP:{
  flexDirection:"row",
  justifyContent:'center',
  marginRight:'5%'
},
viewUp:{
  alignItems:'center',
  justifyContent:'center',
  marginRight:'5%'

},
levels:{
color:'#fff',
fontSize:15,

},

main:{
 alignItems:"center",
 height:'80%',
 
 
},

titulo:{
  color:"#fff",
  fontWeight:"bold",
  fontSize:35,
  marginTop:10,
  marginLeft:10
},
containerLista:{
  backgroundColor:"#fff",
  width:'95%',
  height:'110%',
  borderRadius:7,
  alignItems:"center",
  marginTop:10,
},

viewInputs:{
  width:'100%',
  justifyContent:"center",
  alignItems:"center",
},

nickBox:{
  backgroundColor:'#fff',
  width:'100%',
  marginTop:20,
  marginBottom: 20,
  justifyContent:"space-around",
  flexDirection:"column",
  alignItems:"center",
  borderRadius:5,
  shadowOffset:{
  width:1,
  height:1,
  },
  shadowRadius:5,
  shadowColor:'#C1C1C1',
  elevation: 3
},

usuarioBox:{
  backgroundColor:'#fff',
  width:'95%',
  marginTop:20,
  marginBottom: 20,
  height:170,
  justifyContent:"space-around",
  flexDirection:"row",
  alignItems:"center",
},

view:{
  borderColor: "000",
  borderWidth: 2,
  borderRadius:120,
  justifyContent:"space-around",
  flexDirection:"row",
  alignItems:"center",
  height:120,
  width: 120,
  padding: 25,
  margin: 40,
  backgroundColor: '#ebebeb',
},

dadosContaBoxNick:{
  backgroundColor:'#fff',
  width:'95%',
  marginTop:20,
  height:75,
  justifyContent:"space-around",
  flexDirection:"column",
  alignItems:"center",
  borderRadius:5,
},

upperDadosBox:{
  height:40,
  justifyContent:'space-between',
  flexDirection:"row",
  alignItems:"center",
  marginLeft: 20,
  marginRight: 20,
  width: '100%',
 
},
textContaDadosTitle:{
  color:'#000',
  fontSize:15,
 
},
textContaDadosSenha:{
  color:'#000',
  fontSize:20,
  marginBottom: 15,
},

btnEditarDados:{
  color:'#000',
  
  alignItems:"center",
  padding: 1,
  width: 50,
},

dadosContaBox:{
  backgroundColor:'#fff',
  width:'95%',
  marginTop:20,
  marginBottom: 20,
  height:75,
  justifyContent:"space-around",
  flexDirection:"column",
  alignItems:"center",
  borderRadius:5,
  shadowOffset:{
  width:1,
  height:1,
  },
  shadowRadius:5,
  shadowColor:'#C1C1C1',
  elevation: 3
},

textContaDadosTitleEmail:{
  color:'#000',
  fontSize:15,
  
},
textContaDados:{
  color:'#000',
  fontSize:20,
  marginBottom: 15
},
btnDeletar:{
  fontSize: 15,
  width: '100%',
  fontWeight: 'bold',
  color: "#fff",
  alignItems:"center",
  textAlign: "center",
},
dadosContaBoxLogout:{
  
  backgroundColor:'#888695',
  width:'95%',
  marginTop:15,
  marginBottom: 25,
  height:55,
  justifyContent:"space-around",
  flexDirection:"column",
  alignItems:"center",
  textAlign: "center",
  borderRadius:5,
  shadowOffset:{
  width:1,
  height:1,
  },
  shadowRadius:5,
  shadowColor:'#C1C1C1',
  elevation: 3
},
dadosContaBoxDelete:{
  backgroundColor:'#e05a5a',
  width:'95%',
  marginTop:5,
  marginBottom: 40,
  height:55,
  justifyContent:"space-around",
  flexDirection:"column",
  alignItems:"center",
  textAlign: "center",
  borderRadius:5,
  shadowOffset:{
  width:1,
  height:1,
  },
  shadowRadius:5,
  shadowColor:'#C1C1C1',
  elevation: 3
},

containerModal:{
  backgroundColor: '#615D6C',
  width: "100%",
  height:200,
  alignContent:"flex-end",
  padding: 15,
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
},
containerModal2:{
  flex: 1,
  flexDirection: 'column',
  marginTop: 500,
  backgroundColor: '#B8B8B8',
  width: "100%",
  padding: 15,
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
},
modalContent:{
  height: 300,
  width: "95%",
  backgroundColor: '#fff', 
  padding: 20,
},
modalContent2:{
  height: 300,
  width: "95%",
  backgroundColor: '#fff', 
  padding: 20,
},

btnExitModal:{
  width: 50,
},
btnExitModal2:{
  width: 50,
},

containerInputs:{
  display:"flex",
  alignItems:"center",
  flexDirection:"column",
},
containerInputs2:{
  display:"flex",
  alignItems:"center",
  flexDirection:"column",
},

inputApelido:{
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
input2:{
  marginTop: 20,
    width:'95%',
    height:55,
    borderRadius:5,
    backgroundColor:'#615D6C',
    paddingBottom:25,
    paddingLeft:5,
    fontWeight:"bold",
    fontSize:17,
    shadowOffset:{
        width:1,
        height:1
    },
    shadowRadius:5,
    shadowColor:'#333'
    
  

},
TextEditName:{
  color:"#4A4848",
  fontWeight:"bold",
  fontSize:30,
  marginTop:10,
},




})