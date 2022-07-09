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
  marginTop:10,

},
containerLista:{
  backgroundColor:"#fff",
  width:'95%',
  height:'100%',
  borderRadius:7,
  marginTop:10,
},
icon:{
  flex:1,
  flexDirection:"row",
  justifyContent:'space-around',
  width:'100%',
  marginTop:30,
},
iconBox:{
  shadowOffset:{
    width:1,
    height:1,
    },
  shadowRadius:5,
  shadowColor:'#C1C1C1',
  borderRadius:5,
  height:100,
  width:100,
  alignItems: "center",
  elevation: 3
},
imgIcon:{
  marginTop: 22,
  width:55,
},



})