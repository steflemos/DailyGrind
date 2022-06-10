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
 height:'80%',
 
 
},
form:{
  borderTopWidth: 1,
  borderColor: "#fff"
},
titulo:{
  color:"#fff",
  fontWeight:"bold",
  fontSize:35
},
containerLista:{
  backgroundColor:"#fff",
  width:'95%',
  height:'100%',
  borderRadius:7,
  alignItems:"center"
},
tarefaCriada:{
  backgroundColor:'#CAE5FF',
  width:'90%',
  marginTop:30,
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