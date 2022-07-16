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
// containerInputs:{
//   display:"flex",
//   alignItems:"center",
//   flexDirection:"column",
// },
controleIndex:{
    height:45,
    width:45,
    marginLeft:'10%',
   
},
containerModal:{
  flex: 1,
  flexDirection: 'column',
  backgroundColor: '#615D6C',
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
btnExitModal:{
  width: 50,
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

input:{
  width:'70%',
  height:47,
  backgroundColor: '#fff',
  borderRadius:10,
  marginTop: 30,
  fontSize: 17,
  fontWeight:"bold",
  paddingLeft: 15

  

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
  height:'80%',
  borderTopLeftRadius:7,
  borderTopRightRadius:7,
  alignItems:"center",
  marginTop:10,
},
containerLista2:{
  backgroundColor:"#fff",
  width:'95%',
  height:'20%',
  borderBottomLeftRadius:7,
  borderBottomRightRadius:7,
  marginTop:2,
},
tarefaCriada:{
  backgroundColor:'#CAE5FF',
  width:'100%',
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
  elevation: 3
},
btnTarefa:{
  width:'90%'
},
textTarefa:{
  fontWeight:"bold",
  color:'#615D6C',
  fontSize:20,
  
  
},
viewBtn:{
  alignSelf: "flex-end",
  alignItems:'flex-end',
},
btnAdd:{
backgroundColor:'#ACEDFF',
width:70,
height:70,
alignItems:'center',
justifyContent:'center',
marginRight:25,
borderRadius:100,

},
ViewAddTask:{
  width:'100%',
  height:'100%',
  alignItems:'center',
  justifyContent:'space-between',

  

},
ContainerInputs:{
  flexDirection:'row',
  width:'100%',
  height:'100%',

},
InputTask:{
  backgroundColor:'#C7DFFF',
  height: 50,
  color:'#6A6A6A',
  marginTop:10,
  fontSize:17,
  fontWeight:'bold',
  borderTopLeftRadius:7,
  borderTopRightRadius:7,
  marginLeft:20

},
ViewInputTextAdd:{
  width:'70%'

},
Viewbotao:{
  width:'30%',
  height:'100%',
  alignItems:'center',
justifyContent:'center',

},
viewBotaoAdd:{
  height:90,
  width:90,
  backgroundColor:'#89BBFE',
  borderRadius:90,
  alignItems:'center',
  justifyContent:'center',
}

})