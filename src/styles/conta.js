import { StyleSheet } from "react-native";


export default StyleSheet.create({

container:{
    flex:1,
    backgroundColor:"#6F8AB7",
    paddingTop:15
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
  marginRight:10,
  marginLeft:-40,
},

controleIndex:{
    height:45,
    width:45,
    marginLeft:'10%',
   
},
levels:{
    height:35,
    width:35,
    marginRight:'10%',

},
numerosHeader:{
  color:'#32CD32',
  fontSize:30,
},
main:{
 alignItems:"center",
 height:'90%',
 
 
},
form:{
  borderTopWidth: 1,
  borderColor: "#fff"
},

containerLista:{
  backgroundColor:"#fff",
  width:'95%',
  height:'96.5%',
  borderRadius:7,
  alignItems:"center",
  marginTop:10,
},
viewInputs:{
  width:'100%',
  justifyContent:"center",
  alignItems:"center",
  

},
containerGrupoTitle:{
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    width: "100%",
    alignItems: "center",
    height: 70,
},
grupoTitle:{
    marginTop: 14,
    color:"#615D6C",
    fontWeight:"bold",
    fontSize:30
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
  borderRadius:5,
  shadowOffset:{
  width:1,
  height:1,
  },
  shadowRadius:5,
  shadowColor:'#C1C1C1',
  elevation: 3

    
},

dadosContaBox:{
  backgroundColor:'#fff',
  width:'95%',
  marginTop:20,
  marginBottom: 20,
  height:50,
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

upperDadosBox:{
  height:20,
  justifyContent:"space-around",
  flexDirection:"row",
  alignItems:"center",
  borderColor: '#000',
  borderWidth: 1,
  marginLeft: 20,
  marginRight: 20,
  width: '100%',
},
textContaDadosTitle:{
  color:'#000',
  fontSize:15,
},
btnEditarDados:{
  color:'#000',
  fontSize:15,
},
textDadoUsuario:{
  color:'#fff'
},
btnDeletar:{
  color: '#000',
  fontSize: 15,
  width: '100%',
  fontWeight: 'bold'
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
  marginRight:55,
  marginLeft:-30,
},

viewBtn:{
  alignSelf: "flex-start",
  alignItems:'flex-start',
  marginRight:60,
},

btnVoltar:{
    alignItems:'center',
    justifyContent:'center',
    marginLeft:20,
    marginTop:23,
    borderRadius:100,
},
main:{
    alignItems:"center",
    height:'80%',
    
},
containerSobre:{
  backgroundColor:"#fff",
  width:'95%',
  height:'105%',
  borderRadius:7,
  marginTop:10,
},
textos:{
},
oque:{
  fontSize:30,
  fontWeight:"bold",
  marginLeft:20,
  marginTop:40,
},
text1:{
  padding:23,
  fontSize:17,
  marginTop: -10,
},
qual:{
  fontSize:25,
  fontWeight:"bold",
  marginLeft:20,
},
text2:{
  padding:23,
  fontSize:17,
  marginTop: -10,
}

});