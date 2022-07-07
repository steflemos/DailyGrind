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
 height:'80%',
 
 
},
form:{
  borderTopWidth: 1,
  borderColor: "#fff"
},
titulo:{
  color:"#fff",
  fontWeight:"bold",
  fontSize:35,
  marginTop:10
},
containerLista:{
  backgroundColor:"#fff",
  width:'95%',
  height:'95%',
  borderRadius:7,
  alignItems:"center",
  marginTop:10,
},
containerPodio:{
  width:'100%',
  height:'95%',
  alignItems:"center",
  flexDirection:'column',
  justifyContent:'space-around',

},
textpodio:{
  color:'#615D6C',
  fontWeight:"bold",
  fontSize:20,
  marginTop:-13,
  marginBottom:-60
},
textpodio2:{
  color:'#615D6C',
  fontWeight:"bold",
  fontSize:20,
  marginTop:-40,
  marginBottom:-60
},

grupoTitle:{
    marginTop: 14,
    color:"#615D6C",
    fontWeight:"bold",
    fontSize:30
},
grupoList:{
  backgroundColor:'#f2f5f7',
  width:'90%',
  marginTop:20,
  height:70,
  justifyContent:"space-between",
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
pontosRec:{
    backgroundColor:'#dcdfe0',
    width:60,
    height:60,
    alignItems:'center',
    justifyContent:'center',
    marginRight:25,
    borderRadius:60,
    shadowOffset:{
        width:1,
        height:1,
        },
        shadowRadius:5,
        shadowColor:'#C1C1C1',
        elevation: 3
},
textTarefa:{
  fontWeight:"bold",
  color:'#615D6C',
  fontSize:20,
  marginLeft:25
  
  
},
viewBtn:{
  alignSelf: "flex-end",
  alignItems:'flex-end',
},
btnAdd:{
backgroundColor:'#ACEDFF',
width:50,
height:50,
alignItems:'center',
justifyContent:'center',
marginRight:25,
marginTop:-7.5,
borderRadius:100,

},
btnText:{
fontSize: 40,
justifyContent:"center",
alignItems:"center",
marginBottom:11

},
titulo:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:35,
    marginTop:10,
    marginRight:130,
  },
  tituloClassificacao:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:32,
    marginTop:10,
  },

  viewBtn:{
    alignSelf: "flex-start",
    alignItems:'flex-start',
  },
  
  btnVoltar:{
      alignItems:'center',
      justifyContent:'center',
      marginLeft:20,
      marginTop:15,
      borderRadius:100,
  },
  Pontos:{
    fontWeight:"bold",
    color:'#615D6C',
    fontSize:15,
  },




})