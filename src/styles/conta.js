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
nick:{
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
email:{
    backgroundColor:'#fff',
    width:'95%',
    marginTop:20,
    marginBottom: 20,
    height:60,
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
  senha:{
    backgroundColor:'#fff',
    width:'95%',
    marginTop:20,
    marginBottom: 20,
    height:60,
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
  deletar:{
    backgroundColor:'#fff',
    width:'95%',
    marginTop:20,
    marginBottom: 20,
    height:60,
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
textTarefa:{
  color:'#8F8F8F',
  fontSize:15,
  
  
},
viewBtn:{
width:50,
height:50,
position:"absolute",
zIndex:99,
bottom:25,
right:30



},
btnAdd:{
backgroundColor:'#ACEDFF',
width:50,
height:50,
alignItems:"center",
justifyContent:"center",
borderRadius:'100%',


},
btnText:{
fontSize: 40,
justifyContent:"center",
alignItems:"center",
marginBottom:11

}




})