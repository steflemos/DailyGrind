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
}



})