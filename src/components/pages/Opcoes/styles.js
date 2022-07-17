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
grupoList:{
  backgroundColor:'#fff',
  width:'90%',
  marginTop:20,
  marginBottom: 20,
  height:70,
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
  fontWeight:"bold",
  color:'#615D6C',
  fontSize:20,
  
  
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