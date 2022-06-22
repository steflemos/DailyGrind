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
    shadowColor:'#333'
    
 
},
data:{
    width:350,
},

main:{
    justifyContent:"center",
},

prioridade:{
    justifyContent:"center",
    alignItems:"center",
   
},
viewPrioridade:{
    marginTop: 20,
    width:'95%',
    height:149,
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
text:{
    paddingLeft:5,
    fontWeight:"bold",
    color:'#615d6c',
    fontSize:17,
   marginTop:5,
    
},
texto:{
    paddingLeft:5,
    fontWeight:"bold",
    color:'#615d6c',
    fontSize:17,
   marginTop:5,
    
},

urgenteMedia:{
    flexDirection:'row',
},
altaBaixa:{
    flexDirection:'row',
},
botao:{
    width:40,
    height:40,
    backgroundColor:'#FF6464',
    borderRadius:40,
},
botao2:{
    width:40,
    height:40,
    backgroundColor:'#86C5FF',
    borderRadius:40
},
botao3:{
    width:40,
    height:40,
    backgroundColor:'#FEB055',
    borderRadius:40
},
botao4:{
    width:40,
    height:40,
    backgroundColor:'#79FF87',
    borderRadius:40
},


})